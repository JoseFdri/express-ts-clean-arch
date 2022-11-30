import 'module-alias/register'
import { setupApp, env, logger } from "./config";
import { MongoHelper } from '../infra/db';

const { port, mongoUrl } = env;

console.log(env)
MongoHelper.connect(mongoUrl)
    .then(() => {
        logger.info('MongoDB connected');

        const app = setupApp();
        
        app.listen(port, () => {
            logger.info(`Server running at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        logger.error(error);
    });