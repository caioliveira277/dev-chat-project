import express from 'express';
import AuthMiddleware from 'app/middlewares/authMiddleware'; 

import AuthController from 'app/controllers/AuthController';
import UserController from 'app/controllers/UserController';
import GroupController from 'app/controllers/GroupController';
import UserGroupController from 'app/controllers/UserGroupController';
import MessageGroupController from 'app/controllers/MessageGroupController'; 

const router = express.Router();

router.post('/auth', AuthController.authenticate);
router.post('/auth-token',[AuthMiddleware.route,  AuthController.authenticateToken]);

router.post('/user', UserController.create);
router.put('/user/:id', [AuthMiddleware.route, UserController.update]);
router.get('/user/:id', [AuthMiddleware.route, UserController.find]);
router.delete('/user', [AuthMiddleware.route, UserController.delete]);

router.post('/group', [AuthMiddleware.route, GroupController.create]);
router.put('/group/:id', [AuthMiddleware.route, GroupController.update]);
router.get('/group/:id', [AuthMiddleware.route, GroupController.find]);
router.delete('/group/:id', [AuthMiddleware.route, GroupController.delete]);

router.post('/user-group', [AuthMiddleware.route, UserGroupController.create]);
router.get('/find-user-groups/:id', [AuthMiddleware.route, UserGroupController.findUserGroups]);
router.get('/find-group-users/:id', [AuthMiddleware.route, UserGroupController.findGroupUsers]);
router.delete('/user-group', [AuthMiddleware.route, UserGroupController.delete]);

router.post('/message', [AuthMiddleware.route, MessageGroupController.create]);
router.get('/group-messages/:id', [AuthMiddleware.route, MessageGroupController.findGroupMessages]);

export default router;