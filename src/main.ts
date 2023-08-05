import { NestFactory } from "@nestjs/core";
import { AppModule } from "./core/app.module";
import LibsConfig from "./core/libs/@Libs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  new LibsConfig({ app }).apply();
  await app.listen(5000);
}
bootstrap();
