import express from 'express';
import userRoutes from './user/userRoutes';

const router = express.Router();

router.use(userRoutes);

export default router;