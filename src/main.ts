import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // valid whitelist 사용 여부 
      forbidNonWhitelisted: true, // whitelist 아닌 내용 input 금지 여부
      transform: true, // 자동 형변환 
    }),
  );
  await app.listen(3000);
}
bootstrap();
