import express from 'express';
import noteRoutes from './routes/noteRoutes';
import connectDB from './config/db';
import logger from './middleware/logger';
import errorHandler from './utils/errorHandler';

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Home Route
app.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to the Note-Taking API!</h1>
      <p>If you want to view notes, kindly use this URL:<a href="https://note-taking-api-with-category.onrender.com/api/notes"></a></p>
    `);
  });

// Routes
app.use('/api/notes', noteRoutes);

// Error handling
app.use(errorHandler);

// Connect to MongoDB
connectDB();

export default app;