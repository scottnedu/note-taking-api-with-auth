"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    if (err.name === 'ValidationError') {
        res.status(400).json({ error: err.message });
        return;
    }
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    res.status(500).json({ error: 'Something went wrong!' });
};
exports.default = errorHandler;
