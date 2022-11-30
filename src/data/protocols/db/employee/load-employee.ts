import { EmployeeModel } from '@/domain/models'

export interface LoadEmployeesRepository {
  load: () => Promise<LoadEmployeesRepository.Result>
}

export namespace LoadEmployeesRepository {
  export type Result = EmployeeModel[]
}
