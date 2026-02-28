import express from 'express';
import db from '../db';

const router = express.Router();

router.get('/', (req, res) => {
  const testimonials = db.prepare('SELECT * FROM testimonials').all();
  res.json(testimonials);
});

router.post('/', (req, res) => {
  const { quote, text, author, role, location, image, rating } = req.body;
  try {
    const info = db.prepare(`
      INSERT INTO testimonials (quote, text, author, role, location, image, rating)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(quote, text, author, role, location, image, rating);
    res.json({ id: info.lastInsertRowid });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { quote, text, author, role, location, image, rating } = req.body;
  try {
    db.prepare(`
      UPDATE testimonials 
      SET quote = ?, text = ?, author = ?, role = ?, location = ?, image = ?, rating = ?
      WHERE id = ?
    `).run(quote, text, author, role, location, image, rating, id);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  try {
    db.prepare('DELETE FROM testimonials WHERE id = ?').run(id);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
