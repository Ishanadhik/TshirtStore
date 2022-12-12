import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/product')
  getProducts(): string{
    
    return this.appService.getProducts();
  }

  @Get('/users')
  getUsers():string{
    return this.appService.getUsers();
  }

  @Post('/login')
  CheckLogin(@Body() checklogin:any){
    return this.appService.checkLogin(checklogin);
    
  }
  
}
