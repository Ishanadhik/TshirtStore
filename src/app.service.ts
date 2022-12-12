import { Injectable } from '@nestjs/common';
import { get } from 'http';
import { CheckLoginDto } from './login.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts():any{
    let Tshirts={
      name:"Nirvana",
      brand:"Nirvana",
      color:"black",
      size:"XXL"
    }
    return Tshirts;
  }

  getUsers():any{
    let Users={
      user1:"ishan",
      user2:"pranjal",
      user3:"prasoon"
    }
    return Users;
  }

  checkLogin(checkLogin:CheckLoginDto):any{
    const chcName="ishan";
    const chcUsername="Ishan123";
    const chcPassword="Ishan123";

    if(chcName==checkLogin.name && chcUsername==checkLogin.username && chcPassword==checkLogin.password){
      return {success:true};
    }
    else{
      return {success:false};
    }
  }
}


