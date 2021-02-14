import { Request, Response, NextFunction } from 'express';
import { Exception } from 'app/utilities';
import jwt from 'jsonwebtoken';

interface ITokenPayload {
  id: string,
  iat: number,
  exp: number
};

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;

    if(!authorization) throw new Exception('Falha de autenticação', 401);
    const token = authorization.replace('Bearer', '').trim();

    let dataJwt
    try {
      dataJwt = jwt.verify(token, process.env.JWT_SECRET!, {
        ignoreExpiration: process.env.NODE_ENV !== 'development' ? false:true
      });
    } catch(_error) {
      throw new Exception('Sessão expirada', 401);
    }
    
    const { id } = dataJwt as ITokenPayload;
    req.userId = Number(id);

    next();
  } catch (error) {
    const { code, message } = Exception.interceptErrors(error);
    return res.status(code).json({ message })
  }
}