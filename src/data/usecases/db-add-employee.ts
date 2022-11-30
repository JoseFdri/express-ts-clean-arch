import { AddEmployee  } from "@/domain/usecases/add-employee";
import { AddEmployeeRepository } from "@/data/protocols";

export class DbAddEmployee implements AddEmployee {
    constructor(private readonly addEmployeeRepository: AddEmployeeRepository) {}

    async add (data: AddEmployee.Params): Promise<void> {
        return this.addEmployeeRepository.add(data);
    };
}
