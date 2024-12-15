import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "../users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // secretOrKey: process.env.JWT_SECRET,
            secretOrKey: "lkFJ9J8FIOJ9mow987u2f"
        })
    }

    async validate(payload: {username: string}) {
        const user = await this.usersService.findByUsername(payload.username)
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}