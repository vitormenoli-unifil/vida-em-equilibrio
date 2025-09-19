import express from 'express';
import User from '../models/User.js';
const router = express.Router();

// Cadastro
router.post('/register', async (req, res) => {
  try {
    const { nome, email, senha, foto, sobreMim } = req.body;
    console.log('Tentativa de cadastro:', req.body);
    const user = new User({ nome, email, senha, foto, sobreMim });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error('Erro no cadastro:', err);
    res.status(400).json({ error: err.message || 'Erro ao cadastrar' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    console.log('Tentativa de login:', req.body);
    const user = await User.findOne({ email, senha });
    if (!user) {
      console.log('Login falhou: credenciais inválidas');
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    res.json(user);
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(400).json({ error: err.message || 'Erro ao logar' });
  }
});

// Buscar todos os usuários
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).json({ error: err.message || 'Erro ao buscar usuários' });
  }
});

export default router;
