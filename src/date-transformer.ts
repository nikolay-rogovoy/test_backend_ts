import {ValueTransformer} from "typeorm/decorator/options/ValueTransformer";
import {getLogger} from "./src/logger";

export class DateTransformer implements ValueTransformer {

    /***/
    logger = getLogger(module);

    to (value: Date): string {
        this.logger.debug(`to -> ${value}`);
        return `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;
    }

    from (value: string) {
        this.logger.debug(`from -> ${value}`);
        return value;
    }
}
