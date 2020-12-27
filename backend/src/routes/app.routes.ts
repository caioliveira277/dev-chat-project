import express from 'express';

import UserController from '../app/controllers/UserController';

const router = express.Router();

router.post('/user', UserController.create);

export default router;