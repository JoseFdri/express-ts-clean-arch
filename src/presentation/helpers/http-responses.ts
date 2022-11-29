import { HttpResponse } from '../protocols/http-response';

export const httpOk = <T>(data: T): HttpResponse => ({
    statusCode: 200,
    body: data
  });
