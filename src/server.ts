import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Demo state
let stats = { members: 7, online: 0, admins: 1, priceMonth: 20 };

app.get('/api/stats', (_req, res) => {
  res.json(stats);
});

app.post('/api/join', (_req, res) => {
  stats.members += 1;
  res.json({ ok: true, members: stats.members });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
