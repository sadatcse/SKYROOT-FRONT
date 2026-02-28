import express from 'express';
import { createServer as createViteServer } from 'vite';
import cors from 'cors';
import authRoutes from './src/routes/auth';
import projectRoutes from './src/routes/projects';
import testimonialRoutes from './src/routes/testimonials';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/projects', projectRoutes);
  app.use('/api/testimonials', testimonialRoutes);

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist (if we were building for prod)
    // For this environment, we mostly rely on dev mode, but good to have structure
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
