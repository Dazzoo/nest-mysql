import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile/Profile';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
    constructor(@InjectRepository(Profile) private profileRepository: Repository<Profile>) { 
    }
    
    async createProfile(CreateProfileDetails: any) {
        const newProfile = this.profileRepository.create({
            ...CreateProfileDetails
        })

        return await this.profileRepository.save(newProfile)
    }

}
