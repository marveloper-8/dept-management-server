"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    try {
        console.log(`This is the env ${process.env.SUPABASE_URL}`);
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true
        }));
        app.enableCors({
            origin: [
                'http://localhost:3000',
                'https://studio.graphql.com'
            ],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization']
        });
        const port = process.env.PORT || 3000;
        await app.listen(port, '0.0.0.0');
        console.log(`Application running on port ${port} ${process.env.SUPABASE_URL}`);
    }
    catch (error) {
        console.error('Application startup error:', error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map