require('reflect-metadata');
const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Newspost',
  tableName: 'newsposts',
  columns: {
    id: { type: Number, primary: true, generated: true },
    header: { type: String },
    text: { type: 'text' },
    deleted: { type: Boolean, default: false },
    createdAt: { type: 'timestamp', createDate: true, nullable: true },
    updatedAt: { type: 'timestamp', updateDate: true, nullable: true },
  },
  indices: [
    { name: 'idx_posts_header', columns: ['header'] },
    { name: 'idx_posts_deleted', columns: ['deleted'] },
  ],
  relations: {
    author: { type: 'many-to-one', target: 'User', joinColumn: true, onDelete: 'SET NULL' },
  },
});
