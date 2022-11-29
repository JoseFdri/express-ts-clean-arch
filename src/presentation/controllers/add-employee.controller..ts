import { HttpRequest } from '../protocols/http-request';

import { Controller, HttpResponse } from '../protocols';
import { httpOk } from '../helpers/';

export class AddEmployeeController implements Controller {
    async handle(req: HttpRequest): Promise<HttpResponse> {
        return httpOk({ message: 'Employee added successfully' });
    }
}