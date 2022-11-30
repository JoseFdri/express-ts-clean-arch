import { HttpResponse } from '@/presentation/protocols';

export const httpOk = <T>(data: T): HttpResponse => ({
    statusCode: 200,
    body: data
  });
