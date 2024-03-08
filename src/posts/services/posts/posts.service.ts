import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post/Post';
import { CreatePostDetails } from 'src/utils/types/postTypes';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>
    ) {

    }

    async createPost(user: any, CreatePostDetails: CreatePostDetails) {
        
         const newPost = await this.postRepository.create({
            ...CreatePostDetails,
            user: user
        })
        return await this.postRepository.save(newPost)
    }
}
