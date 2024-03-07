import { Controller, Post, Body, Param, ParseIntPipe, HttpStatus, Res } from '@nestjs/common';
import { ProfilesService } from 'src/profiles/services/profiles/profiles.service';
import CreateProfileDto from '../../dto/CreateProfile.dto'
import { UsersService } from 'src/users/services/users/users.service'

@Controller('profiles')
export class ProfilesController {
    constructor(
        private profileService: ProfilesService,
        private readonly usersService: UsersService,
    ) {

    }

    @Post(':id')
    async createProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() createProfileDetails: CreateProfileDto,
        @Res() res
    ) {
        const user = await this.usersService.findUserById(id)

        if (!user) {
            return res.status(HttpStatus.NOT_FOUND).json({
                status: HttpStatus.NOT_FOUND,
                message: `User with id: ${id} not found`
            });
        }

        await this.profileService.createProfile(user, createProfileDetails)

        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            message: `Success`
        });
    }
}
