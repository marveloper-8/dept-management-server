import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findByUsername(username: string): Promise<User | undefined>;
    private seedInitialUser;
    createUser(username: string, password: string): Promise<User>;
}
