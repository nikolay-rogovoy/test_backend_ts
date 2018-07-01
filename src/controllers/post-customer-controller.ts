import {IController} from './i-controller';
import {Request, Response} from 'express-serve-static-core';
import {Position} from "../entity/position";
import {getRepository} from "typeorm";
import {getLogger} from "../src/logger";

/***/
export class PostCustomerController implements IController {

    /***/
    logger = getLogger(module);

    /***/
    constructor() {
    }

    /***/
    async handler(req: Request, res: Response) {
        this.logger.debug('handleRoutes /customer post');
        const customerRepository = getRepository(Position);
        let data = new Array<Position>();
        if (req.body instanceof Array) {
            data.push(...req.body);
        } else {
            data.push(req.body);
        }
        data[0].birthday = new Date(data[0].birthday);
        // this.logger.debug(JSON.stringify(data));
        // this.logger.debug(JSON.stringify(typeof(data[0].birthday)));
        let resultSave = await customerRepository.save(data);
        // let resultSave = data;
        res.json({
            message: `Test api - OK. (post)`,
            resultSave: resultSave
        });

    }
}
