import 'module-alias/register'
import { mongoHelper } from '@/infra/db'
import { setupApp, env, logger } from '@/main/config'

const { port, mongoUrl } = env

mongoHelper.connect(mongoUrl)
  .then(() => {
    logger.info('MongoDB connected')

    const app = setupApp()

    app.listen(port, () => {
      logger.info(`Server running at http://localhost:${port}`)
    })
  })
  .catch((error) => {
    logger.error(error)
  })
