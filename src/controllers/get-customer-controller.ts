import {IController} from './i-controller';
import {Request, Response} from 'express-serve-static-core';
import {Customer} from "../entity/Customer";
import {getRepository} from "typeorm";
import {getLogger} from "../src/logger";

/***/
export class GetCustomerController implements IController {

    /***/
    logger = getLogger(module);

    /***/
    constructor() {
    }

    /***/
    async handler(req: Request, res: Response) {
        this.logger.debug('handleRoutes /customer/:idcustomer get');
        const idcustomer = req.params['idcustomer'];
        const customerRepository = getRepository(Customer);
        let customers = await customerRepository.find({
            where: {
                id: idcustomer
            }
        });
        res.json({
            result: customers
        });
    }
}
