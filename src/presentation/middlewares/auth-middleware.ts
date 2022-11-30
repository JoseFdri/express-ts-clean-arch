import { Middleware, HttpResponse } from '@/presentation/protocols'
import { forbidden, serverError, noContent } from '@/presentation/helpers/'
import { AccessDeniedError } from '@/presentation/errors'
import { CheckToken } from '@/domain/usecases'

export class AuthMiddleware implements Middleware {
  constructor (private readonly checkAccessToken: CheckToken) {}

  async handle (httpRequest: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { authorization } = httpRequest
      if (!authorization) {
        return forbidden(new AccessDeniedError())
      }
      const isValid = await this.checkAccessToken.check(authorization)
      if (!isValid) {
        return forbidden(new AccessDeniedError())
      }
      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

export namespace AuthMiddleware {
  export interface Request {
    authorization?: string
  }
}
