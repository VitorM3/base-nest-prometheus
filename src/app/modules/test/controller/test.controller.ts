import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import TestService from "../service/test.servcie";

@Controller("test")
@ApiTags("test")
export default class TesteController {
  public constructor(private readonly service: TestService) {}

  @Get()
  public async test() {
    return await this.service.prometheusExecute("");
  }
}
