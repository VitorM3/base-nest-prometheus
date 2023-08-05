import { Module } from "@nestjs/common";
import AppModules from "src/app/@Modules";
import SharedModule from "../shared/@Shared";

@Module({
  imports: [...AppModules, ...SharedModule],
})
export class AppModule {}
