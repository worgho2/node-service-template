import { app } from './app'
import container from './container'
import { TYPES } from './types'
import { ILogger } from './utils/logger'

const logger = container.get<ILogger>(TYPES.Logger)

const port = process.env.PORT || 3000

app.listen(port, () => logger.info(`Server running at http://localhost:${port}`))
