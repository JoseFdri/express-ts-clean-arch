import { Request } from 'express';

export type HttpResponse = {
    statusCode: number
    body: any
}

export interface Controller {
    handle: (request: Request) => Promise<HttpResponse>
}