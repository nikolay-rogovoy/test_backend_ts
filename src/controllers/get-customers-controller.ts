import {IController} from './i-controller';
import {Request, Response} from 'express-serve-static-core';
import {Position} from "../entity/position";
import {getRepository} from "typeorm";
import {getLogger} from "../src/logger";

/***/
export class GetCustomersController implements IController {

    /***/
    logger = getLogger(module);

    /***/
    constructor() {
    }

    /***/
    async handler(req: Request, res: Response) {
        this.logger.debug('handleRoutes /customer get');
        const customerRepository = getRepository(Position);
        let customers = await customerRepository.find();
        res.json({
            result: customers
        });
    }
}
