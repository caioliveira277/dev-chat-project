import { Request, Response, NextFunction } from 'express';
import { Exception } from 'app/utilities';
import jwt from 'jsonwebtoken';

interface ITokenPayload {
  id: string,
  iat: number,
  exp: number
};

export default class AuthMiddleware {
  private static tokenValidation(token: string): ITokenPayload {
    const tokenFormated = token.replace('Bearer', '').trim();

    let dataJwt;
    try {
      dataJwt = jwt.verify(tokenFormated, process.env.JWT_SECRET!, {
        ignoreExpiration: process.env.NODE_ENV !== 'development' ? false : true
      });
      return dataJwt as ITokenPayload;
    } catch (_error) {
      throw new Exception('Token inválido', 401);
    }
  }

  public static authRoute(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      if (!authorization) throw new Exception('Falha de autenticação', 401);
      
      const payload = AuthMiddleware.tokenValidation(authorization);
      
      const { id } = payload;
      req.userId = Number(id);

      next();
    } catch (error) {
      return res.status(error.code).json({ message: error.message })
    }
  }

  public static authSocket(socket: any, next: (err?: any) => void): void {
    return next();
  }
}