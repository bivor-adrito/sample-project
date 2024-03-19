import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get<ConfigService>(ConfigService);

  const port = configService.get('APP_PORT');


  await app.listen(port);
  console.log(`Running on port ${port}`);
}
bootstrap();
