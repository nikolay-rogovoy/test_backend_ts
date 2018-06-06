import {IController} from './i-controller';
import {Request, Response} from 'express-serve-static-core';
import {Customer} from "../entity/Customer";
import {getConnection, getManager, getRepository} from "typeorm";
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
        const manager = getManager();
        const connection = getConnection();
        let customer1 = await manager.findOne(Customer, {
            where: {
                idcustomer: 1
            }
        });
        let customer2 = await connection
            .createQueryBuilder(/*Customer, 'customer'*/)
            .select()
            .from(Customer, 'customer')
            .where('customer.id = :id', {id: 1})
            .getOne();
        res.json({
            message: `Test api - OK. (get)`,
            customer1: customer1,
            customer2: customer2
        });
    }
}
