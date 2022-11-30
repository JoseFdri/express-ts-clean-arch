import { LoadEmployees } from "@/domain/usecases";
import { DbLoadEmployee } from "@/data/usecases";
import { EmployeeRepository } from "@/infra/db/mongodb";

export const makeDbLoadEmployee = (): LoadEmployees => {
    const employeeMongoRepository = new EmployeeRepository();
    return new DbLoadEmployee(employeeMongoRepository);
}
