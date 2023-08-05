import BaseModule from "./base/base.module";
import PrometheusConfigModule from "./prometheus/prometheus.module";

const SharedModule = [BaseModule, PrometheusConfigModule];

export default SharedModule;
