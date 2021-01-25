import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-usres.dto';
import { UserService } from './users.service';
import { ForbiddenException } from './../common/exceptions/forbidden.exception';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get()
  getUsers(): any {
    throw new ForbiddenException();

    // return  this.usersService.getUsers() ;
  }

  @Get(':id')
  getUser(@Param('id') id: number): any {
    return this.usersService.getUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: any): any {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Post()
  insertUser(@Body() createUserDto: CreateUserDto): any {
    return this.usersService.createUser(createUserDto);
  }
}
