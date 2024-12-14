import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./department.entity";

@Entity('sub-departments')
@ObjectType()
export class SubDepartment {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    name: string;

    @ManyToOne(() => Department, department => department.subDepartments, {
        onDelete: 'CASCADE'
    })
    department: Department
}