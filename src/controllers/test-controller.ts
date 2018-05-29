import {IController} from './i-controller';
import {Request, Response} from 'express-serve-static-core';
import {Customer} from "../entity/Customer";
import {getRepository} from "typeorm";
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
        const customerRepository = getRepository(Customer);
        let customers = await customerRepository.find();
        res.json({
            message: `Test api - OK. (get)`,
            customers: customers
        });
    }
}
