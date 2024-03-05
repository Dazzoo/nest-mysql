import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { User } from 'src/typeorm/entities/User/User';
import { Repository } from 'typeorm';
import { CreateUserParams } from 'src/utils/types/userTypes'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }

    findUsers() {
        return this.userRepository.find()
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt: new Date (),
        })

        return this.userRepository.save(newUser)
    }
}
