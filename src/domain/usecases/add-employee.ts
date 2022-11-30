import { EmployeeModel } from "@/domain/models";

export interface AddEmployee {
    add: (data: AddEmployee.Params) => Promise<void>
}

export namespace AddEmployee {
    export type Params = Omit<EmployeeModel, 'id'>
}
