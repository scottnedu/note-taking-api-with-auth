import express from 'express';
import { register, login, getUserById } from '../controllers/controllers.userAuth';
import { authMiddleware } from '../middleware/middlewares.userAuth';


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', authMiddleware, getUserById);

export default router;