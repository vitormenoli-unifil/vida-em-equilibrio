import { useState } from 'react';
import styles from './Login.module.css';

function Login() {
  const [form, setForm] = useState({ nome: '', email: '', senha: '', foto: '', sobreMim: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
  const API_BASE = 'https://vida-em-equilibrio-backend.onrender.com';
  const url = isLogin ? `${API_BASE}/api/auth/login` : `${API_BASE}/api/auth/register`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro');
      // Salva usuário logado no localStorage
      localStorage.setItem('usuario', JSON.stringify(data));
      alert(isLogin ? 'Login realizado!' : 'Cadastro realizado!');
      // Redireciona para home ou outra página se quiser
      window.location.href = '/';
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
        {!isLogin && (
          <>
            <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
            <input name="foto" placeholder="URL da foto (opcional)" value={form.foto} onChange={handleChange} />
            <input name="sobreMim" placeholder="Sobre mim (até 54 caracteres)" maxLength={54} value={form.sobreMim} onChange={handleChange} />
          </>
        )}
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} required />
        <button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</button>
        <div className={styles.toggle} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
}

export default Login;
