import { Module } from '@nestjs/common';
import { ProfilesService } from './services/profiles/profiles.service';
import { ProfilesController } from './controllers/profiles/profiles.controller';
import { UsersModule } from 'src/users/users.module'
import { Profile } from 'src/typeorm/entities/Profile/Profile';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Profile]),
  UsersModule
],
  providers: [ProfilesService],
  controllers: [ProfilesController],
})
export class ProfilesModule {}
