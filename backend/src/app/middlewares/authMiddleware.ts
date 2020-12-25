import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface ITokenPayload {
  id: string,
  iat: number,
  exp: number
};

export default function authMiddleware(
  req: Request, res: Response, next: NextFunction
) {
  const { authorization } = req.headers;

  if(!authorization) return res.sendStatus(401);

  const token = authorization.replace('Bearer', '').trim();

  try {
    const dataJwt = jwt.verify(token, process.env.JWT_SECRET!);
    
    const { id } = dataJwt as ITokenPayload;

    req.userId = id;
  } catch {
    return res.sendStatus(401);
  }
}