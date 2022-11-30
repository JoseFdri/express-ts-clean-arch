import { Controller, HttpResponse } from '@/presentation/protocols';
import { httpOk } from '@/presentation/helpers/';
import { AddEmployee } from '@/domain/usecases';

export class AddEmployeeController implements Controller<AddEmployeeController.Request> {
    constructor(private readonly addEmployee: AddEmployee) {}
    
    async handle(req: AddEmployeeController.Request): Promise<HttpResponse> {
        await this.addEmployee.add({...req});
        return httpOk({ message: 'Employee added successfully!' });
    }
}

export namespace AddEmployeeController {
    export type Request = {
        name: string;
        email: string;
    }
}