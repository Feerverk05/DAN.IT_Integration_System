import express from 'express';
import 'dotenv/config';
import 'reflect-metadata';
import { AppDataSource } from './ormconfig';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'News Service API'
  });
});

// API routes
app.get('/api/posts', async (req, res) => {
  try {
    const ds = await AppDataSource.initialize();
    const postRepo = ds.getRepository('Newspost');
    const posts = await postRepo.find({ 
      where: { deleted: false },
      relations: ['author'],
      order: { createdAt: 'DESC' }
    });
    await ds.destroy();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const ds = await AppDataSource.initialize();
    const userRepo = ds.getRepository('User');
    const users = await userRepo.find({ 
      where: { deleted: false },
      order: { createdAt: 'DESC' }
    });
    await ds.destroy();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'News Service API', 
    version: '1.0.0',
    endpoints: ['/health', '/api/posts', '/api/users'],
    database: 'PostgreSQL with TypeORM'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
