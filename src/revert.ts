import 'dotenv/config';
import 'reflect-metadata';
import { AppDataSource } from './ormconfig';

(async (): Promise<void> => {
  try {
    const ds = await AppDataSource.initialize();
    await ds.undoLastMigration();
    console.log('Last migration reverted');
    await ds.destroy();
  } catch (e) {
    console.error('Revert error:', e);
    process.exit(1);
  }
})();
