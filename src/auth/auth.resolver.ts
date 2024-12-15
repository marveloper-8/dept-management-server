import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { LoginResponseType } from "./dto/login-response.dto";

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => LoginResponseType)
    async login(@Args('input') loginDto: LoginDto): Promise<LoginResponseType> {
        return this.authService.login(loginDto)
    }
}