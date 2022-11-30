import { CheckToken } from '@/domain/usecases'
import { Decrypter } from '@/data/protocols'

export class JwtCheckToken implements CheckToken {
  constructor (private readonly jwtAdapter: Decrypter) {}

  async check (token: string): Promise<boolean> {
    try {
      await this.jwtAdapter.decrypt(token)
      return true
    } catch (err) {
      return false
    }
  }
}
