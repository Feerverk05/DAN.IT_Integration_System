module.exports = class AddDeletedAndRenameTitle17100 {
  name = 'AddDeletedAndRenameTitle17100';

  async up(queryRunner) {
    await queryRunner.query('ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "deleted" boolean NOT NULL DEFAULT false');
    await queryRunner.query('ALTER TABLE "newsposts" ADD COLUMN IF NOT EXISTS "deleted" boolean NOT NULL DEFAULT false');

    const hasTitle = await queryRunner.hasColumn('newsposts', 'title');
    if (hasTitle) {
      await queryRunner.query('ALTER TABLE "newsposts" RENAME COLUMN "title" TO "header"');
    } else {
      const hasHeader = await queryRunner.hasColumn('newsposts', 'header');
      if (!hasHeader) {
        await queryRunner.query('ALTER TABLE "newsposts" ADD COLUMN "header" character varying');
      }
    }

    await queryRunner.query('CREATE INDEX IF NOT EXISTS idx_users_deleted ON users (deleted)');
    await queryRunner.query('CREATE INDEX IF NOT EXISTS idx_posts_deleted ON newsposts (deleted)');
    await queryRunner.query('CREATE INDEX IF NOT EXISTS idx_posts_header ON newsposts (header)');
  }

  async down(queryRunner) {
    await queryRunner.query('DROP INDEX IF EXISTS idx_posts_header');
    await queryRunner.query('DROP INDEX IF EXISTS idx_posts_deleted');
    await queryRunner.query('DROP INDEX IF EXISTS idx_users_deleted');

    const hasHeader = await queryRunner.hasColumn('newsposts', 'header');
    const hasTitle = await queryRunner.hasColumn('newsposts', 'title');
    if (hasHeader && !hasTitle) {
      await queryRunner.query('ALTER TABLE "newsposts" RENAME COLUMN "header" TO "title"');
    }

    await queryRunner.query('ALTER TABLE "newsposts" DROP COLUMN IF EXISTS "deleted"');
    await queryRunner.query('ALTER TABLE "users" DROP COLUMN IF EXISTS "deleted"');
  }
};
