import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.body);
    
    next();
  }
}
