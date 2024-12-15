import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }))

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://studio.graphql.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })

  const port = process.env.PORT || 3000
  await app.listen(port, '0.0.0.0');
  console.log(`Application running on port ${port} ${process.env.SUPABASE_URL}`)
}
bootstrap();
