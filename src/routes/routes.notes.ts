import express from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  getNotesByCategoryId,
  createCategory,
} from '../controllers/controllers.notes';
import { authMiddleware } from '../middleware/middlewares.userAuth';

const router = express.Router();

// Note routes
router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.post('/', authMiddleware, createNote);
router.put('/:id', authMiddleware, updateNote);
router.delete('/:id', authMiddleware, deleteNote);

// Category routes
router.get('/categories/:categoryId', getNotesByCategoryId);
router.post('/categories', authMiddleware, createCategory);

export default router;