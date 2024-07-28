import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // Creacion del entorno
  const app = await NestFactory.create(AppModule);

  // Validaciones a todos los controladores
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  
  // Configuracion del Swagger como herramienta de documentacion
  const config = new DocumentBuilder()
    .setTitle('My first app docs')
    .setDescription('My first app API description')
    .setVersion('1.0')
    .addTag('app')
    .build();

  // Creacion del documento como tal
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Habilitar cors
  app.enableCors();

  // Escucha del backend por el puerto
  await app.listen(3000);
}
bootstrap();
