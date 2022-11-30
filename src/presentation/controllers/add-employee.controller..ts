import { Controller, HttpResponse, HttpRequest } from '@/presentation/protocols';
import { httpOk } from '@/presentation/helpers/';
import { AddEmployee } from '@/domain/usecases';

export class AddEmployeeController implements Controller {
    constructor(private readonly addEmployee: AddEmployee) {}
    
    async handle(req: HttpRequest): Promise<HttpResponse> {
        return httpOk({ message: 'Employee added successfully' });
    }
}