import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubDepartment } from "./sub-department.entity";

@Entity('departments')
@ObjectType()
export class Department {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    name: string;

    @OneToMany(() => SubDepartment, subDepartment => subDepartment.department, {
        cascade: true,
        eager: true
    })
    @Field(() => [SubDepartment], {nullable: true})
    subDepartments?: SubDepartment[]
}