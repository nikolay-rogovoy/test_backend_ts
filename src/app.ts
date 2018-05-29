"use strict"

import {create} from 'domain';
import {Server} from './server';
import {getLogger} from "./src/logger";

(function main() {

    /***/
    let logger = getLogger(module);

    let serverDomain = create();
    serverDomain.on('error',
        (err) => {
            logger.debug(`serverDomain: Ошибка: ${err.name}\nсообщение: ${err.message}\n${err.stack}`);
        }
    );

    // Запуск сервера
    serverDomain.run(
        () => {
            new Server();
        });

})();
