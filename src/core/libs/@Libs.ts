import { INestApplication } from '@nestjs/common';
import SwaggerConfig from './swagger/swagger.config';

type libsConfigConstructorParams = {
  /**
   * Variável base gerada na main para inicialização do projeto
   */
  app: INestApplication;
};

export default class LibsConfig {
  /**
   * Variável base gerada na main para inicialização do projeto
   */
  private app: INestApplication;
  public constructor({ app }: libsConfigConstructorParams) {
    this.app = app;
  }

  /**
   * Configurar Bibliotecas na aplicação
   */
  public apply() {
    this.swagger();
  }

  /**
   * Configurar Biblioteca Swagger para visualização, administração e testes da API Rest
   */
  public swagger() {
    return SwaggerConfig.apply({ app: this.app });
  }
}
