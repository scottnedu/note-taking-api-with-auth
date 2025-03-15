"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noteRoutes_1 = __importDefault(require("./routes/noteRoutes"));
const db_1 = __importDefault(require("./config/db"));
const logger_1 = __importDefault(require("./middleware/logger"));
const errorHandler_1 = __importDefault(require("./utils/errorHandler"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(logger_1.default);
// Routes
app.use('/api/notes', noteRoutes_1.default);
// Error handling
app.use(errorHandler_1.default);
// Connect to MongoDB
(0, db_1.default)();
exports.default = app;
