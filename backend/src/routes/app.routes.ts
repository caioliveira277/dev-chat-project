import express from 'express';
import AuthMiddleware from 'app/middlewares/authMiddleware'; 

import AuthController from 'app/controllers/AuthController';
import UserController from 'app/controllers/UserController';
import GroupController from 'app/controllers/GroupController';
import UserGroupController from 'app/controllers/UserGroupController';
import MessageGroupController from 'app/controllers/MessageGroupController'; 

const router = express.Router();

router.post('/auth', AuthController.authenticate);

router.post('/user', UserController.create);
router.put('/user/:id', [AuthMiddleware, UserController.update]);
router.get('/user/:id', UserController.find);
router.delete('/user', [AuthMiddleware, UserController.delete]);

router.post('/group', [AuthMiddleware, GroupController.create]);
router.put('/group/:id', [AuthMiddleware, GroupController.update]);
router.get('/group/:id', [AuthMiddleware, GroupController.find]);
router.delete('/group/:id', [AuthMiddleware, GroupController.delete]);

router.post('/user-group', [AuthMiddleware, UserGroupController.create]);
router.get('/find-user-groups/:id', [AuthMiddleware, UserGroupController.findUserGroups]);
router.get('/find-group-users/:id', [AuthMiddleware, UserGroupController.findGroupUsers]);
router.delete('/user-group', [AuthMiddleware, UserGroupController.delete]);

router.post('/message', [AuthMiddleware, MessageGroupController.create]);
router.get('/group-messages/:id', [AuthMiddleware, MessageGroupController.findGroupMessages]);

export default router;