import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'rundev',
      password: 'runrun',
      database: 'run-server',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true, // 개발용 true, 운용 시 false 처리
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
