import { applyDecorators } from '@nestjs/common';
import { ApiResponse, ApiResponseOptions } from '@nestjs/swagger';

type responseParams = {
  responses: ApiResponseOptions[];
};

export default class BaseRouteDependence {
  /**
   * Criação dos Decorators de Respostas do Swagger
   */
  protected static responses({ responses }: responseParams) {
    return applyDecorators(
      ...responses.map((response) => {
        return ApiResponse(response);
      }),
    );
  }
}
