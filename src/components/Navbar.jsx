import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  // Busca usuário logado do localStorage (ajuste para contexto/global se quiser)
  let usuario = null;
  try {
    usuario = JSON.parse(localStorage.getItem('usuario'));
  } catch {}
  const foto = usuario?.foto && usuario.foto.length > 0 ? usuario.foto : '/pessoaSemFoto.png';

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Link to="/">
            <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.options}>
          <Link to="/quem-somos">Quem Somos</Link>
          <Link to="/tema-do-projeto">Tema do Projeto</Link>
          <Link to="/comunidade">Comunidade</Link>
        </div>
        <Link to="/login">
          <img src={foto} alt="Perfil" className={styles.avatar} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;