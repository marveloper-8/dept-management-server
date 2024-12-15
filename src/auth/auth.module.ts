import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
            useFactory: () => ({
                // secret: "process.env.JWT_SECRET",
                secret: "lkFJ9J8FIOJ9mow987u2f",
                signOptions: {expiresIn: '1h'}
            })
        })
    ],
    providers: [AuthService, AuthResolver, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}