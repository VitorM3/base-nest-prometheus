import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import ApiVerifyService from "./api-verify.service";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ScheduleModule.forRoot()],
  providers: [ApiVerifyService],
})
export default class WarningModule {}
