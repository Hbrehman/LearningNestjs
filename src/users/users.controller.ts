import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';


import { CreateUserDto } from './dto/create-usres.dto';
import { UserService } from './users.service';




@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}


  @Get()
  getUsers(): any {
    return  this.usersService.getUsers() ;
  }

  @Get(':id')
  getUser(@Param('id') id: number): any {
    return this.usersService.getUser(id);  
  }


  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: any): any {
    return this.usersService.updateUser(id, updateUserDto)
  }

  @Post()
  insertUser(@Body() createUserDto: CreateUserDto): any {
   return this.usersService.createUser(createUserDto);
  }

}
