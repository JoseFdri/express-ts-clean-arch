import { env } from '@/main/config'
import { JwtAdapter } from '@/infra/cryptography'
import { CheckToken } from '@/domain/usecases'
import { JwtCheckToken } from '@/infra/usecases'

export const makeCheckToken = (): CheckToken => {
  const jwtHelper = new JwtAdapter(env.jwtSecret)
  return new JwtCheckToken(jwtHelper)
}
