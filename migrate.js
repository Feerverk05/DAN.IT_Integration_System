require('dotenv').config();
require('reflect-metadata');
const { AppDataSource } = require('./ormconfig');

(async () => {
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
