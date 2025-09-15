import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
class Pays extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column({ unique: true })
    @Field()
    code: String;

    @Column({ unique: true })
    @Field()
    nom: String;

    @Column({ unique: true })
    @Field()
    emodji: String;

    @Column()
    @Field()
    continent: String;
}

export default Pays;