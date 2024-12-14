import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt"

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {
        this.seedInitialUser()
    }

    async findByUsername(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({where: {username}})
    }

    private async seedInitialUser() {
        const userCount = await this.userRepository.count();
        if (userCount === 0) {
            const hashedPassword = await bcrypt.hash('password123', 10)
            const initialUser = this.userRepository.create({
                username: 'testuser',
                password: hashedPassword,
            })
            await this.userRepository.save(initialUser)
            console.log('Initial user created')
        }
    }

    async createUser(username: string, password: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.userRepository.create({
            username,
            password: hashedPassword
        })
        return this.userRepository.save(user)
    }
}