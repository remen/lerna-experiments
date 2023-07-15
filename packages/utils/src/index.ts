import {Request, Response, NextFunction} from 'express';

export const LOGGER_MIDDLEWARE = (request: Request, response: Response, next: NextFunction) => {
    console.log(`${request.method} ${request.url}`);
    next();
}

export function asyncHandler(handler: (request: Request) => Promise<any>): ((request: Request, response: Response, next: NextFunction) => void) {
    return async function (request, response, next) {
        try {
            const result = await handler(request);
            response.send(String(result));
        } catch (e) {
            next(e);
        }
    }
}