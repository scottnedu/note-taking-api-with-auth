import { Request, Response } from 'express';
import Note, { INote } from '../models/models.notes';
import Category, { ICategory } from '../models/models.categories';

// Get all notes
export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single note by ID
export const getNoteById = async (req: Request, res: Response)=> {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
    res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new note
export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, content, category } = req.body;
    const newNote: INote = new Note({ title, content, category });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a note
export const updateNote = async (req: Request, res: Response) => {
  try {
    const { title, content, category } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
      { title, content, category },
      { new: true }
    );
    if (!updatedNote) {
       res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a note
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
    res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getNotesByCategoryId = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find({ category: req.params.categoryId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;
    const newCategory: ICategory = new Category({ category });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};