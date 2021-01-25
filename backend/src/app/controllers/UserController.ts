import { Request, Response } from 'express';
import { User } from '../models/User';
import { Exception } from '../utilities';

class UserController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      const { email } = req.body;

      const userExists = await User.findOne({ where: { email } });
      if (userExists) throw new Exception('Usuário já cadastrado', 400);

      const userToCreate = new User();
      Object.assign(userToCreate, req.body);
      await userToCreate.save();

      return res.json(userToCreate);
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }

  public async update(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const { name, email, password, profile_status, profile_image } = req.body;

      const userToUpdate = await User.findOne({ where: { id } });
      if (!userToUpdate) throw new Exception('Usuário não encontrado', 400);

      if (password) {
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
      const { id } = req.params;

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