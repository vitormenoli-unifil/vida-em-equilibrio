
/* global process */

import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/vidaemquilibrio';
const port = process.env.PORT || 5000;


mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao MongoDB Atlas!');
    app.use('/api/auth', authRoutes);

    // Tratamento global de erros para garantir resposta JSON
    app.use((err, req, res, next) => {
      console.error('Erro global:', err);
      res.status(500).json({ error: err.message || 'Erro interno do servidor' });
    });

    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB Atlas:', err.message);
    process.exit(1);
  });
