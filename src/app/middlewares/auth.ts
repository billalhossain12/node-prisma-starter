/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import AppError from '../errors/AppError';
import config from '../config';
import { jwtHelpers } from '../utils/jwtHelpers';

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }

      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt_access_secret as string,
      );

      req.user = verifiedUser;

      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new AppError(httpStatus.FORBIDDEN, 'Forbidden!');
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
