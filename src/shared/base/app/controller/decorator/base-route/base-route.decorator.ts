import { Delete, Get, Patch, Post, Put, applyDecorators } from "@nestjs/common";
import BaseRouteDependence from "./base-route-dependence.decorator";
import { ApiResponseOptions, ApiOperation } from "@nestjs/swagger";

type baseParams = {
  /**
   * Respostas enviadas pelo Endpoint
   */
  responses: ApiResponseOptions[];
  /**
   * Titulo do endpoint no Swagger
   */
  title: string;
  /**
   * Descrição do Endpoint no Swagger
   */
  description: string;
};

type routeParams = {
  /**
   * Rota do Endpoint
   */
  path: string;
  /**
   * Configuração do Endpoint
   */
  config: baseParams;
};

export default class Route extends BaseRouteDependence {
  /**
   * Decorators Base, aplicados em todos os Decorators de Endpoint
   */
  private static base({ responses, title, description }: baseParams) {
    return applyDecorators(
      this.responses({ responses }),
      ApiOperation({ summary: title, description }),
    );
  }

  public static GET({ path, config }: routeParams) {
    return applyDecorators(Get(path), this.base(config));
  }
  public static POST({ path, config }: routeParams) {
    return applyDecorators(Post(path), this.base(config));
  }
  public static PATCH({ path, config }: routeParams) {
    return applyDecorators(Patch(path), this.base(config));
  }
  public static PUT({ path, config }: routeParams) {
    return applyDecorators(Put(path), this.base(config));
  }
  public static DELETE({ path, config }: routeParams) {
    return applyDecorators(Delete(path), this.base(config));
  }
}
