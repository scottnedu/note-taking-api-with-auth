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
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_user_1 = __importDefault(require("../models/models.user"));
const JWT_SECRET = process.env.JWT_SECRET;
console.log('JWT_SECRET:', JWT_SECRET);
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables.');
}
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    if (!token) {
        res.status(401).json({ error: 'Access denied. No token provided.' });
        return;
    }
    try {
        // Verify the token
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        // Find the user by ID
        const user = yield models_user_1.default.findById(decoded.id);
        if (!user) {
            res.status(401).json({ error: 'Invalid token. User not found.' });
            return;
        }
        // Convert the Mongoose document to a plain object and explicitly type it
        const userObject = user.toObject();
        // Attach the user to the request object
        req.user = userObject;
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.authMiddleware = authMiddleware;
