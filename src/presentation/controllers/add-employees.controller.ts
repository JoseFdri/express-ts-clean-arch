import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { serverError, noContent, badRequest } from '@/presentation/helpers/'
import { AddEmployee } from '@/domain/usecases'

export class AddEmployeeController implements Controller<AddEmployeeController.Request> {
  constructor (
    private readonly validation: Validation,
    private readonly addEmployee: AddEmployee
  ) {}

  async handle (req: AddEmployeeController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(req.body)
      if (error) {
        return badRequest(error)
      }
      await this.addEmployee.add({ ...req.body })
      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

export namespace AddEmployeeController {
  export interface Request {
    body: body
  }

  interface body {
    name: string
    email: string
  }
}
