require('reflect-metadata');
const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: { type: Number, primary: true, generated: true },
    email: { type: String, unique: true },
    password: { type: String },
    deleted: { type: Boolean, default: false },
    createdAt: { type: 'timestamp', createDate: true, nullable: true },
    updatedAt: { type: 'timestamp', updateDate: true, nullable: true },
  },
  indices: [
    { name: 'idx_users_email', columns: ['email'], unique: true },
    { name: 'idx_users_deleted', columns: ['deleted'] },
  ],
  relations: {
    newsposts: { type: 'one-to-many', target: 'Newspost', inverseSide: 'author' },
  },
});
