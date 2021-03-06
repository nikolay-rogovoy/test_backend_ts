import {IController} from './i-controller';
import {Request, Response} from 'express-serve-static-core';
import {Position} from "../entity/position";
import {createConnection, getConnection, getManager, getRepository} from "typeorm";
import {getLogger} from "../src/logger";

/***/
export class TestController implements IController {

    /***/
    logger = getLogger(module);

    /***/
    constructor() {
    }

    /***/
    async handler(req: Request, res: Response) {
        this.logger.debug('handleRoutes /test get');

        debugger;
        const manager = getManager();
        let customer = manager.create(Position);
        let metadata = manager.connection.entityMetadatas;
        res.json({
            res: 'ok'
        });
        this.logger.debug('TypeOrm - OK');
    }
}

@Reflect.metadata('info', 'wwww')
class Test {
    constructor() {
    }
    @Reflect.metadata('info', 'ssss')
    run() {
        console.log('test')
    }
}
