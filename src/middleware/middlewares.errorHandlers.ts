
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export default errorHandler;
