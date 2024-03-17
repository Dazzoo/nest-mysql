import { Body, Controller, Get, Post, Patch, Param, ParseIntPipe, Delete, Res, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import CreateUserDto from 'src/users/dtos/CreateUser.dto'
import UpdateUserDto from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {

    }
    
    @Get()
    getUsers() {
        return this.userService.findUsers()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    postUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)

    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateUserById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto,
        @Res() res
    ) {
        const user = await this.userService.findUserById(id)

        if (!user) {
            return res.status(HttpStatus.NOT_FOUND).json({
                status: HttpStatus.NOT_FOUND,
                message: `User with id: ${id} not found`
            });
        }

        return await this.userService.updateUserById(id, updateUserDto)
    }

    @Delete(':id')
    async deleteUserById(
        @Param('id', ParseIntPipe) id: number, 
        @Res() res
    ) {
        const user = await this.userService.findUserById(id)

        if (!user) {
            return res.status(HttpStatus.NOT_FOUND).json({
                status: HttpStatus.NOT_FOUND,
                message: `User with id: ${id} not found`
            });
        }

        await this.userService.deleteUserById(id)

        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            message: `User with id: ${id} deleted successfully`
        });
    }
}
