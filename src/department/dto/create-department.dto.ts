import { Field, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional, MinLength } from "class-validator";

@InputType()
export class CreateSubDepartmentDto {
    @Field()
    @IsNotEmpty()
    @MinLength(2)
    name: string;
}

@InputType()
export class CreateDepartmentDto {
    @Field()
    @IsNotEmpty()
    @MinLength(2)
    name: string;

    @Field(() => [CreateSubDepartmentDto], {nullable: true})
    @IsOptional()
    @Type(() => CreateSubDepartmentDto)
    subDepartments?: CreateDepartmentDto[]
}