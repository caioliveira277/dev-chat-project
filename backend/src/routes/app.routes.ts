import express from 'express';

import authMiddleware from '../app/middlewares/authMiddleware';

import UserController from '../app/controllers/UserController';
import AuthController from '../app/controllers/AuthController';

const router = express.Router();

router.post('/user', UserController.store);
router.post('/auth', AuthController.authenticate);

export default router;