import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Post } from './posts/entities/post.entity';
import { PostsModule } from './posts/posts.module';
import { TypicodePostsModule } from './typicode-posts/typicode-posts.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        synchronize: true,
        // logging: true,
        entities: [Post, User],
      }),
    }),
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    AutomapperModule.forRoot([
      {
        name: 'classes',
        strategyInitializer: classes(),
      },
    ]),
    PostsModule,
    UsersModule,
    AuthModule,
    TypicodePostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
