import { injectable } from 'inversify'
import config from 'config'
import { EnvironmentGlobals } from './models/environmentGlobals'

export interface IEnvironmentService {
    globals: EnvironmentGlobals
}

@injectable()
export class EnvironmentService implements IEnvironmentService {
    public globals: EnvironmentGlobals = config.get<EnvironmentGlobals>('globals')
}
