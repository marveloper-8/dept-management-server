import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { UsersService } from "../users/users.service";

async function seedDatabase() {
    const app = await NestFactory.create(AppModule)
    const usersService = app.get(UsersService)

    try {
        await usersService.createUser('testuser', 'password123')
        console.log('Database seeded successfully')
    } catch (error) {
        console.error('Seeding failed', error)
    }
    await app.close()
}

seedDatabase()