import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  async onModuleInit() {
    console.log('Application has been initialized');
    await this.initializeDatabaseSeed();
  }

  private async initializeDatabaseSeed() {
    console.log('Seeding database...');
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
}
