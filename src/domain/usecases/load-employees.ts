import { EmployeeModel } from '@/domain/models'

export interface LoadEmployees {
  load: () => Promise<LoadEmployees.Result>
}

export namespace LoadEmployees {
  export type Result = EmployeeModel[]
}
