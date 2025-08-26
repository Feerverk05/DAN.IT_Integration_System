import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

const port = parseInt(process.env.PORT || '8000', 10);
app.listen(port, () => console.log(`hw15 server on ${port}`));
