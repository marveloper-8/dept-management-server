import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class LoginDto {
    @Field()
    @IsNotEmpty()
    username: string;

    @Field()
    @MinLength(6)
    password: string;
}