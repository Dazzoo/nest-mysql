import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module'
import { Profile } from 'src/typeorm/entities/Profile/Profile';
import { User } from 'src/typeorm/entities/User/User';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './services/posts/posts.service';
import { PostsController } from './controllers/posts/posts.controller';
import { Post } from 'src/typeorm/entities/Post/Post';


@Module({
  imports: [TypeOrmModule.forFeature([Post]),
  UsersModule
],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostModule {}
