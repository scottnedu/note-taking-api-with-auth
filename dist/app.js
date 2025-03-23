"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_notes_1 = __importDefault(require("./routes/routes.notes"));
const routes_userAuth_1 = __importDefault(require("./routes/routes.userAuth"));
const config_db_1 = __importDefault(require("./config/config.db"));
const middlewares_errorHandlers_1 = __importDefault(require("./middleware/middlewares.errorHandlers"));
// Connect to MongoDB
(0, config_db_1.default)();
// Create Express app
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Home Route
app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to the Note-Taking API!</h1>
  `);
});
// Routes
app.use('/api/notes', routes_notes_1.default);
app.use('/api/auth', routes_userAuth_1.default);
// Error handling middleware (must be added after all routes)
app.use(middlewares_errorHandlers_1.default);
exports.default = app;
