require('dotenv').config();
require('reflect-metadata');
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');
const { AppDataSource } = require('./ormconfig');

async function seed() {
  const ds = await AppDataSource.initialize();
  const userRepo = ds.getRepository('User');
  const postRepo = ds.getRepository('Newspost');

  let user = await userRepo.findOne({ where: { email: 'seed@example.com' } });
  if (!user) {
    user = userRepo.create({ email: 'seed@example.com', password: bcrypt.hashSync('qwe123', 10) });
    await userRepo.save(user);
  }

  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
    const data = resp.ok ? await resp.json() : [];
    for (const p of data) {
      const np = postRepo.create({ header: p.title, text: p.body, author: user });
      await postRepo.save(np);
    }
  } catch (_) {
    for (let i = 0; i < 20; i += 1) {
      const np = postRepo.create({ header: faker.lorem.sentence(), text: faker.lorem.paragraphs({ min: 1, max: 3 }), author: user });
      await postRepo.save(np);
    }
  }

  await ds.destroy();
  console.log('Seeding done');
}

seed().catch((e) => { console.error('Seed error:', e); process.exit(1); });
