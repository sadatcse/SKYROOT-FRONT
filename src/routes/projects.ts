import express from 'express';
import db from '../db';

const router = express.Router();

router.get('/', (req, res) => {
  const projects = db.prepare('SELECT * FROM projects').all();
  res.json(projects);
});

router.post('/', (req, res) => {
  const { id, title, location, type, status, image, description, price, unitsLeft } = req.body;
  try {
    db.prepare(`
      INSERT INTO projects (id, title, location, type, status, image, description, price, unitsLeft)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, title, location, type, status, image, description, price, unitsLeft);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, location, type, status, image, description, price, unitsLeft } = req.body;
  try {
    db.prepare(`
      UPDATE projects 
      SET title = ?, location = ?, type = ?, status = ?, image = ?, description = ?, price = ?, unitsLeft = ?
      WHERE id = ?
    `).run(title, location, type, status, image, description, price, unitsLeft, id);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  try {
    db.prepare('DELETE FROM projects WHERE id = ?').run(id);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
