import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User/User'
import { Profile } from './typeorm/entities/Profile/Profile'
import { UsersModule } from './users/users.module';
import { ProfilesController } from './profiles/controllers/profiles/profiles.controller';
import { ProfilesService } from './profiles/services/profiles/profiles.service';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Y6QhfXEmTetC/mhSXU+bzrj1zAvJpDGo',
      database: 'nestjs_mysql_project',
      entities: [User, Profile],
      synchronize: true
    }),
    UsersModule,
    ProfilesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
