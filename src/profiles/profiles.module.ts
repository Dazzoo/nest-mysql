import { Module } from '@nestjs/common';
import { ProfilesService } from './services/profiles/profiles.service';
import { ProfilesController } from './controllers/profiles/profiles.controller';
import { UsersModule } from 'src/users/users.module'
import { Profile } from 'src/typeorm/entities/Profile/Profile';
import { User } from 'src/typeorm/entities/User/User';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Profile, User]),
  UsersModule
],
  providers: [ProfilesService],
  controllers: [ProfilesController],
})
export class ProfilesModule {}
