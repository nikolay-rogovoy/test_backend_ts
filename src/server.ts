import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Router} from "express-serve-static-core";
import * as http from "http";
import {RestRouter} from "./rest-router";
import {getLogger} from "./src/logger";
import {types} from "pg";


/**OKNA.space backend server*/
export class Server {

    /**express*/
    app: express.Application;

    /***/
    httpServer: http.Server;

    /***/
    restRouter: RestRouter = new RestRouter();

    /***/
    logger = getLogger(module);

    /**Конструктор*/
    constructor() {
        this.logger.debug('> Server()');
        this.app = express();
        this.httpServer = http.createServer(this.app);

        types.setTypeParser(1114, function(stringValue) {
            return new Date(Date.parse(stringValue + "+0000"));
        });

        this.configServer();
        this.initTypeOrm();
    }

    /**Конфигурация сервера*/
    configServer() {
        // Изменить прототипы!!!!
        // Время без временых зон
        // Date.prototype.toJSON = function () {
        //     return this.getFullYear().toString().padStart(4, '0')
        //         + '-'
        //         + (this.getMonth() + 1).toString().padStart(2, '0')
        //         + '-'
        //         + this.getDate().toString().padStart(2, '0')
        //         + 'T'
        //         + this.getHours().toString().padStart(2, '0')
        //         + ':'
        //         + this.getMinutes().toString().toString().padStart(2, '0')
        //         + ':'
        //         + this.getSeconds().toString().padStart(2, '0');
        // };
    }

    /**Получить соединение с постгрес*/
    initTypeOrm() {
        createConnection(
            {
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "postgres",
                password: "rjk,fcf123",
                database: "test_ts",
                synchronize: true,
                logging: ['query', 'error', 'schema', 'warn', 'info', 'log'],
                entities: [
                    "entity/**/*.js"
                ]
            }
        ).then(async connection => {
            this.logger.debug('TypeOrm - OK');
            this.configureExpress();
        }).catch(error => this.logger.error(error));

        this.configureExpress();
    }

    /**Конфигурация HTTP сервера*/
    configureExpress() {
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', `*`);
            res.header('Access-Control-Allow-Credentials', `true`);
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            next();
        });
        this.app.use(bodyParser.urlencoded({extended: true}));

        /**
         * https://stackoverflow.com/questions/19917401/error-request-entity-too-large
         * Размер для парсера, обязательно нужно установить
         * */
        this.app.use(bodyParser.json({limit: '50mb'}));
        let router: Router = express.Router();
        this.app.use('/api', router);

        // Добавить маршруты
        this.restRouter.handleRoutes(router);
        this.startServer();
    };

    /**Запуск сервера*/
    startServer() {
        this.httpServer.listen(3005, function(){});
        this.logger.debug('Server started');
    };

    /**Остановка сервера*/
    stop(err) {
        this.logger.debug('stop - OK');
        process.exit(1);
    };

}
