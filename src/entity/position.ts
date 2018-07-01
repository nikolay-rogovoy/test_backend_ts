import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DateTransformer} from "../date-transformer";
import {PositionItem} from "./position-item";

@Entity()
export class Position {

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

    /***/
    @OneToMany(type => PositionItem, positionItem => positionItem.position)
    positionitems: PositionItem[];

}
