import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3010);
}
bootstrap();

/*
 * The entry file of the application which uses the core
 * function NestFactory to create a Nest application instance
 *
 * NestFactory exposes a few static methods that allow creating an application.
 * instance.
 *
 * The create() method returns an application object. This object provides
 * a set of methods which are described in the comming chapters.
 *
 *
 *
 *
 *
 */
