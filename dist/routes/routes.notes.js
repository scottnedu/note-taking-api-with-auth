"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_notes_1 = require("../controllers/controllers.notes");
const middlewares_userAuth_1 = require("../middleware/middlewares.userAuth");
const router = express_1.default.Router();
// Note routes
router.get('/', controllers_notes_1.getAllNotes);
router.get('/:id', controllers_notes_1.getNoteById);
router.post('/', middlewares_userAuth_1.authMiddleware, controllers_notes_1.createNote);
router.put('/:id', middlewares_userAuth_1.authMiddleware, controllers_notes_1.updateNote);
router.delete('/:id', middlewares_userAuth_1.authMiddleware, controllers_notes_1.deleteNote);
// Category routes
router.get('/categories/:categoryId', controllers_notes_1.getNotesByCategoryId);
router.post('/categories', middlewares_userAuth_1.authMiddleware, controllers_notes_1.createCategory);
exports.default = router;
