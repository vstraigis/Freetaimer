import express from 'express';
import { UserController } from '../../controllers';

const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);

export default router;