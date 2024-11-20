import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 5003);
  const logger = new Logger('NestApplication')
  logger.log(`App Listening on http://localhost:${process.env.PORT ?? 5003}`);
}
bootstrap();
