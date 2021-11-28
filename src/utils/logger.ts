import { injectable } from 'inversify'
import * as winston from 'winston'

export interface ILogger {
    error(message: string, ...metadata: Array<any>): winston.Logger
    info(message: string, ...metadata: Array<any>): winston.Logger
    warn(message: string, ...metadata: Array<any>): winston.Logger
    http(message: string, ...metadata: Array<any>): winston.Logger
}

@injectable()
export class Logger implements ILogger {
    constructor() {
        const colors = {
            error: 'red',
            warn: 'yellow',
            info: 'green',
            http: 'magenta',
            debug: 'white',
        }

        this.logger = winston.createLogger({
            levels: {
                error: 0,
                warn: 1,
                info: 2,
                http: 3,
                debug: 4,
            },
            transports: ((): Array<winston.transport> => {
                const transports: Array<winston.transport> = []

                /**
                 * Console transporter
                 */
                if (['development', 'production'].includes('development')) {
                    transports.push(
                        new winston.transports.Console({
                            level: 'debug',
                            format: winston.format.combine(
                                winston.format.timestamp({ format: 'YY-MM-DD HH:mm:ss' }),
                                winston.format.printf((info) => `${info.timestamp} [${info.level}]: ${info.message}`),
                                winston.format.colorize({
                                    all: true,
                                    colors,
                                })
                            ),
                        })
                    )
                }

                /**
                 * File transporter
                 */
                if (['development', 'production'].includes('development')) {
                    transports.push(
                        new winston.transports.File({
                            level: 'debug',
                            dirname: 'logs',
                            filename: 'file.log',
                            format: winston.format.combine(
                                winston.format.timestamp({ format: 'YY-MM-DD HH:mm:ss' }),
                                winston.format.printf((info) => `${info.timestamp} [${info.level}]: ${info.message}`)
                            ),
                        })
                    )
                }

                return transports
            })(),
        })
    }

    private logger: winston.Logger

    error = (message: string, ...metadata: Array<any>) => this.logger.error(message, ...metadata)
    info = (message: string, ...metadata: Array<any>) => this.logger.info(message, ...metadata)
    warn = (message: string, ...metadata: Array<any>) => this.logger.warn(message, ...metadata)
    http = (message: string, ...metadata: Array<any>) => this.logger.http(message, ...metadata)
}
