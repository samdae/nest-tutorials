import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
 /*
  *  Spring에서의 Di
  *  bena factory 처럼 관리 해주는 듯 함 ~~
  */
  constructor(private readonly appService: AppService) {}


  /**
   *   Request mapping 하는 부분인가봄~~
   *   getMapping 을 그냥 이렇게 쓰나봄 
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  /**
   *        typescript => 는 한정자가 없나? 
   *        thwos는 어디서 하나, try catch 면 테스트 툴 돌릴때 노답인디,
   */
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
  
}
