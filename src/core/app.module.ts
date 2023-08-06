import { Module } from "@nestjs/common";
import AppModules from "src/app/@Modules";
import SharedModule from "../shared/@Shared";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ...AppModules,
    ...SharedModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
