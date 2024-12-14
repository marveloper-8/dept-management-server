import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async login(loginDto: LoginDto) {
        const {username, password} = loginDto
        const user = await this.usersService.findByUsername(username)

        if (user && await bcrypt.compare(password, user.password)) {
            const payload = {username: user.username}
            return {
                access_token: this.jwtService.sign(payload)
            }
        }

        throw new UnauthorizedException('Invalid credentials')
    }
}