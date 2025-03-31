import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Link to="/">
            <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={styles.options}>
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/tema-do-projeto">Tema do Projeto</Link>
        <Link to="/comunidade">Comunidade</Link>
      </div>
    </div>
  );
}

export default Navbar;