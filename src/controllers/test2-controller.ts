import {IController} from './i-controller';
import {Request, Response} from 'express-serve-static-core';
import {Position} from "../entity/position";
import {createConnection, getConnection, getManager, getRepository} from "typeorm";
import {getLogger} from "../src/logger";
import {fromPromise} from "rxjs/observable/fromPromise";
import {map} from "rxjs/operators";

/***/
export class Test2Controller implements IController {

    /***/
    logger = getLogger(module);

    /***/
    constructor() {
    }

    /***/
    async handler(req: Request, res: Response) {
        this.logger.debug('handleRoutes /test get');
        debugger;
        res.json({
            res: 'ok'
        });
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
