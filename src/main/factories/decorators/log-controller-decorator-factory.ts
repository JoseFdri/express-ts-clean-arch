import { Controller } from '../../../presentation/protocols';
import { LogControllerDecorator } from '../../decorators/log-controller.decorator';

export const makeLogControllerDecorator = (controller: Controller): Controller => {
    return new LogControllerDecorator(controller);
}
