import { User } from "src/auth/entities/user.entity";
import { JwtPayload } from "src/auth/interfaces/jwt-payload.interface";

export const createJwtPayload = (user: User): JwtPayload => ({
    sub: user.id,
    username: user.username,
})