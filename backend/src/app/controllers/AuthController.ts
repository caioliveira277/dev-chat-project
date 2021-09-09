import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from 'app/models/User';
import { Exception } from 'app/utilities';


class AuthController {
  public async authenticate(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
  
      const userExists = await User.findOne({
        select: ['id', 'name', 'password', 'profile_image', 'profile_status'],
        where: { email }
      });
      if(!userExists) throw new Exception('Usuário não encontrado', 400);
  
      const isValidPassword = await bcrypt.compare(password.toString(), userExists.password);
      if(!isValidPassword) throw new Exception('Senha inválida', 400);
  
      const token = jwt.sign({ id: userExists.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
  
      return res.json({
        ...userExists,
        password: null,
        token
      });
    } catch (error) {
      return res.status(error.code).json({ message: error.message });
    }
  }

  public async authenticateToken(req: Request, res: Response) {
    try {
      const { userId } = req;

      const userExists = await User.findOne({
        where: { id: userId } 
      });
      if(!userExists) throw new Exception('Usuário não encontrado', 400);
  
      const token = jwt.sign({ id: userExists.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
  
      return res.json({
        ...userExists,
        token
      });
    } catch (error) {
      return res.status(error.code).json({ message: error.message })
    }
  }
}

export default new AuthController();