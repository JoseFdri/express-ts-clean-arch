import { Controller } from '@/presentation/protocols'
import { LoadEmployeesController } from '@/presentation/controllers'
import { makeLogControllerDecorator, makeDbLoadEmployee } from '@/main/factories'

export const makeLoadEmployeeController = (): Controller => {
  // I can inject any dependency here
  const controller = new LoadEmployeesController(makeDbLoadEmployee())
  return makeLogControllerDecorator(controller)
}
