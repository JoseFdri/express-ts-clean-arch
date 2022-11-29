import { HttpRequest } from '../../presentation/protocols/http-request';
import { Controller } from '../../presentation/protocols';
import { HttpResponse } from '../../presentation/protocols/http-response';

export class LogControllerDecorator implements Controller {

    constructor(private readonly controller: Controller) {}
    // todo - add logger, replace the Request object with a custom object to avoid dependency on express
    async handle(request: HttpRequest): Promise<HttpResponse> {
        const httpResponse = await this.controller.handle(request);
        if (httpResponse.statusCode === 500) {
            // log
            console.log(httpResponse.body.stack);
        }
        return httpResponse;
    }
}
