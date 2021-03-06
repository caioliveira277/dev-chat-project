import { Request, Response } from 'express';
import { User } from 'app/models/User';
import jwt from 'jsonwebtoken';
import { Exception } from 'app/utilities';

class UserController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      const { email, password, passwordConfirmation } = req.body;

      const userExists = await User.findOne({ where: { email } });
      if (userExists) throw new Exception('Usuário já cadastrado', 400);

      if(password !== passwordConfirmation) throw new Exception('Falha na confirmação de senha', 400);

      const userToCreate = new User();
      Object.assign(userToCreate, req.body);
      await userToCreate.save();

      const token = jwt.sign({ id: userToCreate.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

      return res.json({
        ...userToCreate,
        password: '',
        token
      });
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }

  public async update(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const { name, email, password, profile_status, profile_image, passwordConfirmation } = req.body;

      const userToUpdate = await User.findOne({ where: { id } });
      if (!userToUpdate) throw new Exception('Usuário não encontrado', 400);

      
      if (password) {
        if(password !== passwordConfirmation) throw new Exception('Falha na confirmação de senha', 400);
        userToUpdate.password = password;
      }

      userToUpdate.name = name;
      userToUpdate.email = email;
      userToUpdate.profile_status = profile_status;
      userToUpdate.profile_image = profile_image;
      await userToUpdate.save();

      userToUpdate.password = '';
      return res.json(userToUpdate);
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }

  public async find(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const userToFind = await User.findOne({ where: { id } });
      if (!userToFind) throw new Exception('Usuário não encontrado', 400);

      userToFind.password = '';
      return res.json(userToFind);
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }

  public async delete(req: Request, res: Response): Promise<any> {
    try {
      const id = req.userId;

      const userToDelete = await User.findOne({ where: { id } });
      if (!userToDelete) throw new Exception('Usuário não encontrado', 400);

      const isDeleted = await userToDelete.remove();
      if (!isDeleted) throw new Exception('Falha ao remover usuário', 500);

      return res.json({ message: 'Usuário deletado com sucesso' })
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }
}

export default new UserController();