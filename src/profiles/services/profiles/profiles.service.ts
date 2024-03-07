import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile/Profile';
import { User } from 'src/typeorm/entities/User/User';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
    constructor(@InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(User) private userRepository: Repository<User>) { 
    }
    
    async createProfile(user: any, CreateProfileDetails: any) {
        const newProfile = this.profileRepository.create(CreateProfileDetails)

        await this.profileRepository.save(newProfile)
        user.profile = newProfile;
        await this.userRepository.save(user);

        return user
    }

}
