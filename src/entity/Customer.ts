import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {DateTransformer} from "../date-transformer";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    name: string;

    @Column({
        nullable: true
    })
    comment: string;

    @Column(
        {
            type: 'date',
            nullable: true,
            transformer: new DateTransformer()
        }
    )
    birthday: Date;

    @Column({nullable: true})
    dtcre: Date;
}
