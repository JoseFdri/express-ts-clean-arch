import { AddEmployee } from '@/domain/usecases';

export interface AddEmployeeRepository {
    add: (data: AddEmployeeRepository.Params) => Promise<void>
}

export namespace AddEmployeeRepository {
    export type Params = AddEmployee.Params;
}
