import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

@InputType()
export class CreateUserDto {
    @Field()
    @IsNotEmpty({message: 'Username cannot be empty'})
    @IsString()
    @MinLength(3, {message: 'Username must be at least 3 characters long'})
    username: string;

    @Field()
    @IsNotEmpty({message: 'Password cannot be empty'})
    @MinLength(8, {message: 'Password must be at least 8 characters long'})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: 'Password must include uppercase, lowercase, number, and special character'
    })
    password: string
}