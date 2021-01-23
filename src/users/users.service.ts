import { Injectable } from '@nestjs/common';
import {User} from './interfaces/user.interface'


@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'john',
      age: 21,
    },
    {
      id: 2,
      name: 'Dave',
      age: 22,
    },
    {
      id: 3,
      name: 'Michal',
      age: 23,
    },
    {
      id: 4,
      name: 'Abraham',
      age: 24,
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find(c => c.id === +id);
  }

  updateUser(userId: number, newUserData: User): User {
    const user: any = this.users.find(c => c.id === +userId);
    const userIdx = this.users.indexOf(user);
    this.users[userIdx] = newUserData;
    return newUserData;
  }

  createUser(user: User): User {
    this.users.push(user);
   return user;
  }
  
}
