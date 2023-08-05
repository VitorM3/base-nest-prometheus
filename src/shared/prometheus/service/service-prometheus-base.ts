import { makeCounterProvider } from "@willsoto/nestjs-prometheus";
import { makeHistogramProvider } from "@willsoto/nestjs-prometheus";
import ConfigPrometheus from "./config-prometheus-service";
import { histogramObj } from "../domain/types/histogram-object";

export default class PrometheusProvider {
  public static provider(name: string) {
    const nameCounter = `${ConfigPrometheus.defineName({
      name: name,
      type: "counter",
    })}`;
    const nameHistogram = `${ConfigPrometheus.defineName({
      name: name,
      type: "histogram",
    })}`;
    return [
      makeCounterProvider({
        name: nameCounter,
        help: `${nameCounter}:help`,
      }),
      makeHistogramProvider({
        name: `${nameHistogram}`,
        help: `${nameHistogram}:help`,
        labelNames: Object.keys(histogramObj),
      }),
    ];
  }
}
