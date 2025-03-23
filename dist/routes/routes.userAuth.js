"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_userAuth_1 = require("../controllers/controllers.userAuth");
const middlewares_userAuth_1 = require("../middleware/middlewares.userAuth");
const router = express_1.default.Router();
router.post('/register', controllers_userAuth_1.register);
router.post('/login', controllers_userAuth_1.login);
router.get('/:id', middlewares_userAuth_1.authMiddleware, controllers_userAuth_1.getUserById);
exports.default = router;
