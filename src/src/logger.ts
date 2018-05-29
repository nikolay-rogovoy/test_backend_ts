import {transports, Logger} from 'winston';

/***/
export function getLogger(module: NodeModule) {
    let label = module.filename.split('/').slice(-1).join('/');
    let logger = new Logger({
        transports: [
            new transports.File({
                name: 'error-file',
                filename: 'logs/error.log',
                level: 'error',
                label: label,
                timestamp: true
            }),
            new transports.File({
                name: 'warn-file',
                filename: 'logs/warn.log',
                level: 'warn',
                label: label
            }),
            new transports.File({
                name: 'info-file',
                filename: 'logs/info.log',
                level: 'info',
                label: label,
                timestamp: true
            }),
            new transports.File({
                name: 'debug-file',
                filename: 'logs/debug.log',
                level: 'debug',
                label: label,
                timestamp: true
            }),
            new transports.Console({
                name: 'console',
                level: 'debug',
                label: label,
                timestamp: true
            })
        ]
    });
    return logger;
}

/*

{ error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
{ emerg: 0, alert: 1, crit: 2, error: 3, warning: 4, notice: 5, info: 6, debug: 7 }


    logger.error("error");
    logger.warn('warn');
    logger.info('debug');
    logger.debug('debug');

*/