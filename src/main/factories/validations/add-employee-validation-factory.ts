import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddEmployeeValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['name', 'email'];
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations)
}
