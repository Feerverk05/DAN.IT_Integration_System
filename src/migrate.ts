import 'dotenv/config';
import 'reflect-metadata';
import { AppDataSource } from './ormconfig';

(async (): Promise<void> => {
  try {
    const ds = await AppDataSource.initialize();
    await ds.runMigrations();
    console.log('Migrations executed');
    await ds.destroy();
  } catch (e) {
    console.error('Migration error:', e);
    process.exit(1);
  }
})();
