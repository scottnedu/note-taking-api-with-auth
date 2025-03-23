import { Request } from 'express';
import { IUser } from '../models/models.user';
import { Types } from 'mongoose';

/**
 * Extends the Express Request object to include a `user` property.
 */
export interface AuthRequest extends Request {
  user: IUser & { _id: Types.ObjectId };
}

/**
 * Type guard to check if a request is of type `AuthRequest`.
 * @param req - The request object.
 * @returns True if the request is of type `AuthRequest`, false otherwise.
 */
export const isAuthRequest = (req: Request): req is AuthRequest => {
  return (req as AuthRequest).user !== undefined;
};