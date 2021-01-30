import express from 'express';

import UserController from 'app/controllers/UserController';
import GroupController from 'app/controllers/GroupController';
import UserGroupController from 'app/controllers/UserGroupController';
import MessageGroupController from 'app/controllers/MessageGroupController'; 

const router = express.Router();

router.post('/user', UserController.create);
router.put('/user/:id', UserController.update);
router.get('/user/:id', UserController.find);
router.delete('/user/:id', UserController.delete);

router.post('/group', GroupController.create);
router.put('/group/:id', GroupController.update);
router.get('/group/:id', GroupController.find);
router.delete('/group/:id', GroupController.delete);

router.post('/user-group', UserGroupController.create);
router.get('/find-user-groups/:id', UserGroupController.findUserGroups);
router.get('/find-group-users/:id', UserGroupController.findGroupUsers);
router.delete('/user-group', UserGroupController.delete);

router.post('/message', MessageGroupController.create);
router.get('/group-messages/:id', MessageGroupController.findGroupMessages);

export default router;