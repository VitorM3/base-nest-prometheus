import { Module } from "@nestjs/common";
import TestService from "./service/test.servcie";
import TesteController from "./controller/test.controller";

@Module({
  providers: [...TestService.provider(TestService.namePrometheus), TestService],
  controllers: [TesteController],
})
export default class TestModule {}
