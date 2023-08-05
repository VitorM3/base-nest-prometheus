import BaseService from "@/src/shared/base/app/services/base.service";
import PMetric from "@/src/shared/prometheus/domain/decorators/metric.decorator";
import { HttpException, Injectable } from "@nestjs/common";
import { Counter, Histogram } from "prom-client";

const namePrometheus = "TestService";

@Injectable()
export default class TestService extends BaseService<any, string> {
  public static namePrometheus = namePrometheus;
  public constructor(
    @PMetric.apply(namePrometheus, "counter")
    counter: Counter,

    @PMetric.apply(namePrometheus, "histogram")
    histogram: Histogram,
  ) {
    super({
      counter,
      histogram,
    });
  }

  public async execute() {
    await new Promise(r => setTimeout(r, 40000));
    throw new HttpException("SLA MANO", 403);
    return "a";
  }
}
