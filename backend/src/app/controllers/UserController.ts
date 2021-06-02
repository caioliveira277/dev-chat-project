import { Request, Response } from 'express';
import { User } from 'app/models/User';
import jwt from 'jsonwebtoken';
import { Exception } from 'app/utilities';
import bcrypt from "bcryptjs";

class UserController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      const { email, password, passwordConfirmation } = req.body;

      const userExists = await User.findOne({
        select: ['id'],
        where: { email } 
      });
      if (userExists) throw new Exception('Usuário já cadastrado', 400);

      if (password !== passwordConfirmation) throw new Exception('Falha na confirmação de senha', 400);

      const userToCreate = new User();
      Object.assign(userToCreate, req.body);
      await userToCreate.save();

      const token = jwt.sign({ id: userToCreate.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

      return res.json({
        ...userToCreate,
        token
      });
    } catch (error) {
      return res.status(error.code).json({ message: error.message })
    }
  }

  public async update({
    id,
    name,
    email,
    password,
    profile_status,
    profile_image,
    passwordConfirmation
  }: User & { passwordConfirmation: String }): Promise<any> {
    try {
      const userToUpdate = await User.findOne({ where: { id } });
      if (!userToUpdate) throw new Exception('Usuário não encontrado', 400);

      if (password) {
        if (password !== passwordConfirmation) throw new Exception('Falha na confirmação de senha', 400);
        userToUpdate.password = bcrypt.hashSync(password, 8);
      }

      userToUpdate.name = name;
      userToUpdate.email = email;
      userToUpdate.profile_status = profile_status;
      userToUpdate.profile_image = profile_image;
      await userToUpdate.save();

      return userToUpdate;
    } catch (error) {
      Exception.interceptErrors(error);
    }
  }

  public async find(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const userToFind = await User.findOne({ where: { id } });
      if (!userToFind) throw new Exception('Usuário não encontrado', 400);

      return res.json(userToFind);
    } catch (error) {
      return res.status(error.code).json({ message: error.message })
    }
  }
}

export default new UserController();