import { AuthMiddleware } from '@/presentation/middlewares'
import { Middleware } from '@/presentation/protocols'
import { makeCheckToken } from '@/main/factories/'

export const makeAuthMiddleware = (): Middleware => {
    // I can inject dependencies here
    return new AuthMiddleware(makeCheckToken());
}
