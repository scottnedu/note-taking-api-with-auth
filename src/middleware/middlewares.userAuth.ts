import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/models.user';
import { IUser } from '../models/models.user';
import { Types } from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET;
console.log('JWT_SECRET:', JWT_SECRET);
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables.');
}

// Define the extended Request type
interface AuthRequest extends Request {
  user?: IUser & { _id: Types.ObjectId };
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void>  => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
  res.status(401).json({ error: 'Access denied. No token provided.' });
  return;
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    // Find the user by ID
    const user = await User.findById(decoded.id);
    if (!user) {
    res.status(401).json({ error: 'Invalid token. User not found.' });
    return;
    }

    // Convert the Mongoose document to a plain object and explicitly type it
    const userObject = user.toObject() as IUser & { _id: Types.ObjectId };

    // Attach the user to the request object
    req.user = userObject;
    next();
  } catch (error) {
    next(error);
  }
};