import express from 'express';
import noteRoutes from './routes/noteRoutes';
import connectDB from './config/db';
import logger from './middleware/logger';
import errorHandler from './utils/errorHandler';

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/notes', noteRoutes);

// Error handling
app.use(errorHandler);

// Connect to MongoDB
connectDB();

export default app;