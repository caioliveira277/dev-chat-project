import express from 'express';
import AuthMiddleware from 'app/middlewares/authMiddleware'; 

import AuthController from 'app/controllers/AuthController';
import UserController from 'app/controllers/UserController';
import GroupController from 'app/controllers/GroupController';
import UserGroupController from 'app/controllers/UserGroupController';

const router = express.Router();

/* rotas de autenticação */
router.post('/auth', AuthController.authenticate);
router.post('/auth-token',[AuthMiddleware.authRoute,  AuthController.authenticateToken]);

/* rotas dos usuários */
router.post('/user', UserController.create);
router.get('/user/:id', [AuthMiddleware.authRoute, UserController.find]);
router.delete('/user', [AuthMiddleware.authRoute, UserController.delete]);

/* rotas dos grupos */
router.post('/group', [AuthMiddleware.authRoute, GroupController.create]);
router.put('/group/:id', [AuthMiddleware.authRoute, GroupController.update]);
router.get('/group/:id', [AuthMiddleware.authRoute, GroupController.find]);
router.delete('/group/:id', [AuthMiddleware.authRoute, GroupController.delete]);

/* rotas de relacinamento usuário e grupo */
router.post('/user-group', [AuthMiddleware.authRoute, UserGroupController.create]);
router.delete('/user-group', [AuthMiddleware.authRoute, UserGroupController.delete]);

export default router;