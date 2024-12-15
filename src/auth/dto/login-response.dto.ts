import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LoginResponseType {
    @Field()
    access_token: string;
}