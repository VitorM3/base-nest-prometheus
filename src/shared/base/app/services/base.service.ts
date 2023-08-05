import { IHistogramObject } from "@/src/shared/prometheus/domain/types/histogram-object";
import PrometheusProvider from "@/src/shared/prometheus/service/service-prometheus-base";
import { Counter, Histogram } from "prom-client";

type constructorParams = {
  /**
   * Métrica de Contagem do Prometheus
   */
  counter: Counter;
  /**
   * Métrica de Relatório do Prometheus
   */
  histogram: Histogram;
};

export default abstract class BaseService<T, V> {
  /**
   * Métrica de Contagem do Prometheus
   */
  private counter: Counter;
  /**
   * Métrica de Relatório do Prometheus
   */
  private histogram: Histogram;
  public constructor({ counter, histogram }: constructorParams) {
    this.counter = counter;
    this.histogram = histogram;
  }

  abstract execute(params: T): Promise<V>;

  public async prometheusExecute(params: T): Promise<V> {
    this.counter.inc();
    const end = this.histogram.startTimer();
    try {
      const data = await this.execute(params);
      const obj: IHistogramObject = {
        status: data ? 200 : 201,
        response: JSON.stringify(data),
        obj_request: JSON.stringify(params),
      };
      end({
        ...obj,
      });
      return data;
    } catch (error: any) {
      const obj: IHistogramObject = {
        status: error.status ? error.status : 500,
        response: JSON.stringify(error),
        obj_request: JSON.stringify(params),
      };
      end({
        ...obj,
      });
      throw error;
    }
  }

  public static provider(name: string) {
    return PrometheusProvider.provider(name);
  }
}
