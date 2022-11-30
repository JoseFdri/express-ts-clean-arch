import { Controller, HttpResponse } from '@/presentation/protocols';
import { LoadEmployees } from '@/domain/usecases';
import { ok, serverError } from '@/presentation/helpers'

export class LoadEmployeesController implements Controller {
    constructor(private readonly loadEmployees: LoadEmployees) {}

    async handle(): Promise<HttpResponse> {
        try {
            const employees = await this.loadEmployees.load();
            return ok(employees);
        } catch (err) {
            return serverError(err);
        }
    }
}
