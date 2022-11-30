import { AddEmployee } from "@/domain/usecases";
import { DbAddEmployee } from "@/data/usecases";
import { EmployeeRepository } from "@/infra/db/mongodb";

export const makeDbAddEmployee = (): AddEmployee => {
    const employeeMongoRepository = new EmployeeRepository();
    return new DbAddEmployee(employeeMongoRepository);
}
