import { app } from './app'
import container from './ioc/container'
import { TYPES } from './ioc/types'
import { ILogger } from './utils/logger'

const logger = container.get<ILogger>(TYPES.Logger)

const port = process.env.PORT || 3000

app.listen(port, () => logger.info(`Server running at http://localhost:${port}`))
