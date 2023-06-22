import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: '*',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const SERVER_PORT: number | string = process.env.PORT;
  await app.listen(SERVER_PORT, () => {
    console.log(
      `Application is running on port ${SERVER_PORT}. Url: http://localhost:${SERVER_PORT}`,
    );
  });
}
bootstrap();
