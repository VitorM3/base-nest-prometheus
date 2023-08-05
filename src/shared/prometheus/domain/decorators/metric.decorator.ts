import { InjectMetric } from "@willsoto/nestjs-prometheus";
import ConfigPrometheus from "../../service/config-prometheus-service";

export default class PMetric {
  public static apply(name: string, type: "counter" | "histogram") {
    return InjectMetric(ConfigPrometheus.defineName({ name, type }));
  }
}
