import Profile from '../components/Profile';
import styles from './QuemSomos.module.css';

function QuemSomos() {
  return (
    <div className={styles.container}>
      <div className={styles.unifil}>
        <img src="/unifil.png" alt="Unifil Logo" />
        <h1 className={styles.title}>Quem Somos</h1>
      </div>
      <p className={styles.description}>Conheça nossa equipe:</p>
      <div className={styles.profilesContainer}>
        <Profile
          imagem="/pessoa-vitor.jpeg"
          nome="Vitor Hideo Menoli Nakamura"
          curso="Engenharia de Software"
          githubNick="vitormenoli"
        />
        <Profile
          imagem="/pessoa-cesar.png"
          nome="César Augusto Gamero"
          curso="Engenharia de Software"
          githubNick="cesargamero"
        />
        <Profile
          imagem="/pessoa-gustavo.jpg"
          nome="Gustavo Garcia Ishikawa"
          curso="Engenharia de Software"
          githubNick="GustavoIshikaw"
        />
        <Profile
          imagem="/pessoa-carlos.png"
          nome="Carlos Gabriel Guimarães Sonomiya"
          curso="Engenharia de Software"
          githubNick="CharlesGuimaraes"
        />
        <Profile
          imagem="/pessoa-matheus.png"
          nome="Matheus Aguiar Maioli de Carvalho"
          curso="Engenharia de Software"
          githubNick="Matheusaguiar777"
        />
      </div>
    </div>
  );
}

export default QuemSomos;