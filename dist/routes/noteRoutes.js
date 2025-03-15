"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noteController_1 = require("../controllers/noteController");
const router = express_1.default.Router();
// Note routes
router.get('/', noteController_1.getAllNotes);
router.get('/:id', noteController_1.getNoteById);
router.post('/', noteController_1.createNote);
router.put('/:id', noteController_1.updateNote);
router.delete('/:id', noteController_1.deleteNote);
router.get('/categories/:categoryId', noteController_1.getNotesByCategoryId);
exports.default = router;
