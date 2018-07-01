import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Position} from "./position";

@Entity()
export class PositionItem {

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

    /***/
    @ManyToOne(type => Position, position => position.positionitems, {
        nullable: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'idorderdoc' })
    position: Position;

}
