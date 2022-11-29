import { Controller } from '../../../presentation/protocols';
import { AddEmployeeController } from '../../../presentation/controllers';
import { makeLogControllerDecorator } from '../';

export const makeEmployeeController = (): Controller => {
    const controller = new AddEmployeeController();
    return makeLogControllerDecorator(controller);
}
