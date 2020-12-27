import express from 'express';

import UserController from '../app/controllers/UserController';

const router = express.Router();

router.post('/user', UserController.create);
router.put('/user/:id', UserController.update);
router.get('/user/:id', UserController.find);
router.delete('/user/:id', UserController.delete);

export default router;