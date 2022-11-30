import { Controller } from '@/presentation/protocols';
import { LogControllerDecorator } from '@/main/decorators';

export const makeLogControllerDecorator = (controller: Controller): Controller => {
    // we can inject any depencency here
    return new LogControllerDecorator(controller);
}
