import { useState } from 'react';
import styles from './Comunidade.module.css';

import { useEffect } from 'react';

function getFoto(foto) {
  return foto && foto.length > 0 ? foto : '/pessoaSemFoto.png';
}
function Comunidade() {
  const [usuarios, setUsuarios] = useState([]);
  const [popupIdx, setPopupIdx] = useState(null);

  useEffect(() => {
    fetch('/api/auth/users')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(() => setUsuarios([]));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.vida}>
        <h1 className={styles.title}>Comunidade</h1>
        <img src="/logo.png" alt="Vida em Equilíbrio" />
      </div>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Público-Alvo</h2>
        <p>
          Nosso site é destinado a todas as pessoas que desejam melhorar sua saúde e qualidade de vida.
          Entre os principais públicos estão:
        </p>
        <ul className={styles.list}>
          <li>Jovens e adultos que buscam informações sobre bem-estar.</li>
          <li>Profissionais da área da saúde interessados em conteúdos educativos.</li>
          <li>Pessoas que querem adotar hábitos mais saudáveis no dia a dia.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Benefícios e Contribuições</h2>
        <p>
          Acreditamos que o conhecimento sobre saúde deve ser acessível a todos. Nosso site traz conteúdos que ajudam na:
        </p>
        <ul className={styles.list}>
          <li>Prevenção de doenças através de hábitos saudáveis.</li>
          <li>Melhoria da saúde mental e física.</li>
          <li>Promoção do bem-estar por meio de dicas confiáveis.</li>
          <li>Engajamento comunitário para troca de experiências.</li>
        </ul>
      </section>

      {/* <section className={styles.section}>
        <h2 className={styles.subtitle}>Participe da Nossa Comunidade</h2>
        <p>
          Queremos construir um espaço onde todos possam compartilhar conhecimento e experiências.
          Você pode contribuir de várias formas:
        </p>
        <ul className={styles.list}>
          <li>Comentando e compartilhando nossos artigos.</li>
          <li>Enviando sugestões de conteúdo e temas.</li>
          <li>Participando de discussões e fóruns sobre saúde.</li>
          <li>Divulgando nosso site para amigos e familiares.</li>
        </ul>
      </section> */}

      {/* Seção de usuários simulados - layout horizontal */}
      <div className={styles.section}>
        <h2 className={styles.subtitle}>Nossa Comunidade</h2>
        <div className={styles.profileList}>
          {usuarios.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#888', padding: '1.5rem' }}>Nenhum usuário encontrado.</div>
          ) : (
            usuarios.map((usuario, idx) => (
              <div
                key={usuario._id || idx}
                className={styles.profileItem}
                onClick={() => setPopupIdx(idx)}
                tabIndex={0}
                aria-label={`Ver perfil de ${usuario.nome}`}
              >
                <img
                  className={styles.profileImg}
                  src={getFoto(usuario.foto)}
                  alt={usuario.nome}
                />
                <div className={styles.profileInfo}>
                  <div className={styles.profileName}>{usuario.nome}</div>
                  <div className={styles.profileSobre}>{usuario.sobreMim}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pop-up do perfil */}
      {popupIdx !== null && (
        <div className={styles.popupOverlay} onClick={() => setPopupIdx(null)}>
          <div
            className={styles.popupContent}
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className={styles.popupClose}
              onClick={() => setPopupIdx(null)}
              aria-label="Fechar"
            >
              &times;
            </button>
            <img
              className={styles.profileImg}
              src={getFoto(usuarios[popupIdx]?.foto)}
              alt={usuarios[popupIdx]?.nome}
              style={{ marginBottom: 12 }}
            />
            <div className={styles.profileName} style={{ fontSize: "1.3rem", marginBottom: 8 }}>{usuarios[popupIdx]?.nome}</div>
            <div className={styles.profileSobre} style={{ fontSize: "1.05rem" }}>{usuarios[popupIdx]?.sobreMim}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comunidade;