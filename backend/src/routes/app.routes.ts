import express from 'express';

import UserController from '../app/controllers/UserController';
import GroupController from "../app/controllers/GroupController";

const router = express.Router();

router.post('/user', UserController.create);
router.put('/user/:id', UserController.update);
router.get('/user/:id', UserController.find);
router.delete('/user/:id', UserController.delete);

router.post('/group', GroupController.create);
router.put('/group/:id', GroupController.update);
router.get('/group/:id', GroupController.find);
router.delete('/group/:id', GroupController.delete);

export default router;