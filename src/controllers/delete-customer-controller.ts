import {IController} from './i-controller';
import {Request, Response} from 'express-serve-static-core';
import {Position} from "../entity/position";
import {getRepository} from "typeorm";
import {getLogger} from "../src/logger";

/***/
export class DeleteCustomerController implements IController {

    /***/
    logger = getLogger(module);

    /***/
    constructor() {
    }

    /***/
    async handler(req: Request, res: Response) {
        this.logger.debug('handleRoutes /customer/:idcustomer delete');
        const customerRepository = getRepository(Position);
        const idcustomer = req.params['idcustomer'];
        let resultDelete = await customerRepository.delete(idcustomer);
        // let resultSave = data;
        res.json({
            message: `Test api - OK. (post)`,
            resultSave: resultDelete
        });

    }
}
