import { Request, Response } from 'express';
import { User } from '../models/User';
import { Exception } from '../utilities';

class UserController {
  public async create(req: Request, res: Response) {
    try {
      const { email } = req.body;
  
      const userExists = await User.findOne({ where: { email } });
      if(userExists) throw new Exception('Usuário já cadastrado', 400);
      
      const user = new User();
      Object.assign(user, ...req.body);
      await user.save();
  
      return res.json(user);
    } catch ({code, message}) {
      return res.status(code).json({message})
    }
  }
}

export default new UserController();