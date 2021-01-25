import { Request, Response, NextFunction } from 'express';

// Middleware in a function
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Requesting...');
  next();
}

// Middleware in a class
// import { Injectable, NestMiddleware } from '@nestjs/common';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//     use(req: Request, res: Response, next: NextFunction) {
//         console.log('requesting...');
//         next();
//     }
// }
