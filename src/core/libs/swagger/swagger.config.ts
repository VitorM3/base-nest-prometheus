import { INestApplication } from '@nestjs/common';
import SwaggerConfigDependence from './swagger-dependence.config';

type applyParams = {
  /**
   * Variável base gerada na main para inicialização do projeto
   */
  app: INestApplication;
};

export default class SwaggerConfig extends SwaggerConfigDependence {
  public static apply({ app }: applyParams) {
    const config = this.documentBuilder({
      title: 'Base Project API REST',
      description: 'Projeto base para a API REST',
    });
    return this.setupSwagger({ app, config, path: '/doc' });
  }
}
