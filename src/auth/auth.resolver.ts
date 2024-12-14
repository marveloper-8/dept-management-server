import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Mutation(() => String)
    async login(@Args('input') loginDto: LoginDto) {
        return this.authService.login(loginDto)
    }
}