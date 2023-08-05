type defineNameParams = {
  /**
   * Nome definido á métrica do Prometheus
   */
  name: string;
  /**
   * Tipo de métrica do Prometheus
   */
  type: "counter" | "histogram";
};

export default class ConfigPrometheus {
  /**
   * Definir nome da métrica do Prometheus
   */
  public static defineName({ name, type }: defineNameParams) {
    return `${name}:${type}`;
  }
}
