import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from 'app/models/User';
import { Exception } from 'app/utilities';


class AuthController {
  public async authenticate(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
  
      const userExists = await User.findOne({ where: { email } });
  
      if(!userExists) throw new Exception('Usuário não encontrado', 400);
  
      const isValidPassword = await bcrypt.compare(password, userExists.password);
      if(!isValidPassword) throw new Exception('Senha inválida', 400);
  
      const token = jwt.sign({ id: userExists.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
  
      return res.json({
        ...userExists,
        password: '',
        token
      });
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }
}

export default new AuthController();