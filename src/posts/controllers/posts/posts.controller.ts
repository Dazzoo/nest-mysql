import { Controller, Post, Body, Param, ParseIntPipe, HttpStatus, Res } from '@nestjs/common';
import { createPost } from 'src/posts/dtos/CreatePost.dto';
import { PostsService } from 'src/posts/services/posts/posts.service';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
        private readonly usersService: UsersService,
    ) {
    
    }

    @Post(':userId')
    async createPost(
        @Param('userId', ParseIntPipe) userId: number,
        @Body() postDetais: createPost,
        @Res() res
    ) {
        const user = await this.usersService.findUserById(userId)

        if (!user) {
            return res.status(HttpStatus.NOT_FOUND).json({
                status: HttpStatus.NOT_FOUND,
                message: `User with id: ${userId} not found`
            });
        }

        const post = await this.postsService.createPost(user, postDetais)

        console.log(post)

        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            message: `Success`,
            data: post
        });
    }
}
