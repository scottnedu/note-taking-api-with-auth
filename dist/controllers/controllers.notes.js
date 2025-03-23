"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = exports.getNotesByCategoryId = exports.deleteNote = exports.updateNote = exports.createNote = exports.getNoteById = exports.getAllNotes = void 0;
const models_notes_1 = __importDefault(require("../models/models.notes"));
const models_categories_1 = __importDefault(require("../models/models.categories"));
// Get all notes
const getAllNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield models_notes_1.default.find();
        res.status(200).json(notes);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getAllNotes = getAllNotes;
// Get a single note by ID
const getNoteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield models_notes_1.default.findById(req.params.id);
        if (!note) {
            res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getNoteById = getNoteById;
// Create a new note
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, category } = req.body;
        const newNote = new models_notes_1.default({ title, content, category });
        yield newNote.save();
        res.status(201).json(newNote);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.createNote = createNote;
// Update a note
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, category } = req.body;
        const updatedNote = yield models_notes_1.default.findByIdAndUpdate(req.params.id, { title, content, category }, { new: true });
        if (!updatedNote) {
            res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(updatedNote);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.updateNote = updateNote;
// Delete a note
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedNote = yield models_notes_1.default.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.deleteNote = deleteNote;
const getNotesByCategoryId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield models_notes_1.default.find({ category: req.params.categoryId });
        res.status(200).json(notes);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getNotesByCategoryId = getNotesByCategoryId;
// Create a new category
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.body;
        const newCategory = new models_categories_1.default({ category });
        yield newCategory.save();
        res.status(201).json(newCategory);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.createCategory = createCategory;
