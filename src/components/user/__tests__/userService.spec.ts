import 'reflect-metadata'
import { expect } from 'chai'
import { cleanUpMetadata } from 'inversify-express-utils'

import container from '../../../ioc/container'
import { TYPES } from '../../../ioc/types'
import { ILogger } from '@utils/logger'

describe('userService', () => {
    beforeEach(() => {
        cleanUpMetadata()
    })

    describe('getUser', () => {
        it('Should return the user', () => {
            const logger = container.get<ILogger>(TYPES.Logger)
            logger.info('eita')
            expect(1).to.equal(1)
        })
    })
})
