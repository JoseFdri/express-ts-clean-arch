import { Controller } from '@/presentation/protocols';
import { AddEmployeeController } from '@/presentation/controllers';
import { makeLogControllerDecorator, makeDbAddEmployee } from '@/main/factories';


export const makeAddEmployeeController = (): Controller => {
    // I can inject any dependency here
    const controller = new AddEmployeeController(makeDbAddEmployee());
    return makeLogControllerDecorator(controller);
}
