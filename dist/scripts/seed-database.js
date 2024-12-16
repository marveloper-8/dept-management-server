"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const users_service_1 = require("../users/users.service");
async function seedDatabase() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const usersService = app.get(users_service_1.UsersService);
    try {
        await usersService.createUser('testuser', 'password123');
        console.log('Database seeded successfully');
    }
    catch (error) {
        console.error('Seeding failed', error);
    }
    await app.close();
}
seedDatabase();
//# sourceMappingURL=seed-database.js.map