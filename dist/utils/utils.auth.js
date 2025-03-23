"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthRequest = void 0;
/**
 * Type guard to check if a request is of type `AuthRequest`.
 * @param req - The request object.
 * @returns True if the request is of type `AuthRequest`, false otherwise.
 */
const isAuthRequest = (req) => {
    return req.user !== undefined;
};
exports.isAuthRequest = isAuthRequest;
