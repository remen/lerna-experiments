import {Request, Response, NextFunction} from 'express';

export const LOGGER_MIDDLEWARE = (request: Request, response: Response, next: NextFunction) => {
  console.log(`${request.method} ${request.url}`);
  next();
}