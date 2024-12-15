import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV !== 'production', // Be cautious with this in production
  logging: process.env.NODE_ENV !== 'production',
}));