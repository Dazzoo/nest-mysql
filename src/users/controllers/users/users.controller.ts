import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateUserDto from 'src/users/dtos/CreateUser.dto'
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {

    }
    
    @Get()
    getUsers() {
        return 'hi'
    }

    @Post()
    postUser(@Body() createUserDto: CreateUserDto) {
        this.userService.createUser(createUserDto)

    }
}