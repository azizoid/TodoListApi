import { Injectable } from '@nestjs/common';

import { uuid } from 'uuidv4';


@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({ token: uuid() });
  }
}
