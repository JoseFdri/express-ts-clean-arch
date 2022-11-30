import { LoadEmployees  } from "@/domain/usecases/";
import { LoadEmployeesRepository } from "@/data/protocols";

export class DbLoadEmployee implements LoadEmployees {
    constructor(private readonly loadEmployeeRepository: LoadEmployeesRepository) {}

    async load (): Promise<LoadEmployees.Result> {
        return this.loadEmployeeRepository.load();
    };
}
