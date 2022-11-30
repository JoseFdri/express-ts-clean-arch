export interface CheckToken {
  check: (token: string) => Promise<boolean>
}
