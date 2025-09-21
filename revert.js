require('dotenv').config();
require('reflect-metadata');
const { AppDataSource } = require('./ormconfig');

(async () => {
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
