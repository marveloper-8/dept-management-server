import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { LoginResponseType } from "./dto/login-response.dto";
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<LoginResponseType>;
}
