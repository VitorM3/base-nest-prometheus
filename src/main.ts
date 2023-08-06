import { NestFactory } from "@nestjs/core";
import { AppModule } from "./core/app.module";
import LibsConfig from "./core/libs/@Libs";
import WarningModule from "./warning/warning.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  new LibsConfig({ app }).apply();
  await app.listen(process.env.PORT ?? 3000);
}

async function warning() {
  if (!process.env.HAVE_WARNING) {
    return;
  }
  const app = await NestFactory.create(WarningModule);
  await app.listen(process.env.PORT_WARNING);
}
bootstrap();
warning();
