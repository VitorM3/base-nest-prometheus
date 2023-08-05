import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

type documentBuilderParams = {
  /**
   * Titulo exibido na pagina
   */
  title: string;
  /**
   * Descrição exibida na pagina
   */
  description: string;
};

type setupSwaggerParams = {
  /**
   * Variável base gerada na main para inicialização do projeto
   */
  app: INestApplication;
  /**
   * Variável de configuração do Swagger
   */
  config: Omit<OpenAPIObject, 'paths'>;
  /**
   * Rota em que o Swagger será apresentado
   */
  path: string;
};

export default class SwaggerConfigDependence {
  /**
   * Configurações Gerais do Swagger
   * @returns Variável de configuração do Swagger
   */
  protected static documentBuilder({
    title,
    description,
  }: documentBuilderParams) {
    return new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .build();
  }

  /**
   * Inicializar Pagina do Swagger
   */
  protected static setupSwagger({ app, config, path }: setupSwaggerParams) {
    const document = SwaggerModule.createDocument(app, config);
    return SwaggerModule.setup(path, app, document);
  }
}
