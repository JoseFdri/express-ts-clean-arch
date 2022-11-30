import { HttpRequest } from '@/presentation/protocols/http-request';
import { Controller } from '@/presentation/protocols';
import { HttpResponse } from '@/presentation/protocols/http-response';
import { logger } from '@/main/config';

export class LogControllerDecorator implements Controller {

    constructor(private readonly controller: Controller) {}
    
    async handle(request: HttpRequest): Promise<HttpResponse> {
        const httpResponse = await this.controller.handle(request);
        if (httpResponse.statusCode === 500) {
            logger.error(httpResponse.body.stack);
        }
        return httpResponse;
    }
}
