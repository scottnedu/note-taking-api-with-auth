import express from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  getNotesByCategoryId,
} from '../controllers/noteController';

const router = express.Router();

// Note routes
router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);
router.get('/categories/:categoryId', getNotesByCategoryId);
export default router;