import express from 'express';
import AuthMiddleware from 'app/middlewares/authMiddleware'; 

import AuthController from 'app/controllers/AuthController';
import UserController from 'app/controllers/UserController';

const router = express.Router();

/* authentication routes */
router.post('/auth', AuthController.authenticate);
router.post('/auth-token',[AuthMiddleware.authRoute,  AuthController.authenticateToken]);

/* user routes */
router.post('/user', UserController.create);
router.get('/user/:id', [AuthMiddleware.authRoute, UserController.find]);

export default router;