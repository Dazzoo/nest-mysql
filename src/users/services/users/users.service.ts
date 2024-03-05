import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { User } from 'src/typeorm/entities/User/User';
import { Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types/userTypes'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }

    findUsers() {
        return this.userRepository.find()
    }

    
    async findUserById(id) {
        return await this.userRepository.findOne({ where: { id } });
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt: new Date (),
        })

        return this.userRepository.save(newUser)
    }

    async updateUserById(id: number, userDetails: UpdateUserParams) {
        await this.userRepository.update(
            { id }, 
            {
                ...userDetails
            }
        )
        return this.userRepository.findOne({ where: { id } });
    }

    async deleteUserById(id: number) {

        return await this.userRepository.delete(
            { id }
        )
    }
}
