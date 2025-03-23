import express from 'express';
import noteRoutes from './routes/routes.notes';
import userAuthRoutes from './routes/routes.userAuth';
import connectDB from './config/config.db';
import errorHandler from './middleware/middlewares.errorHandlers';

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Note-Taking API!</h1>
  `);
});

// Routes
app.use('/api/notes', noteRoutes);
app.use('/api/auth', userAuthRoutes);

// Error handling middleware (must be added after all routes)
app.use(errorHandler);

export default app;