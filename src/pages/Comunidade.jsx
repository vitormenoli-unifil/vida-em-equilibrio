import styles from './Comunidade.module.css';

function Comunidade() {
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

      <section className={styles.section}>
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
      </section>
    </div>
  );
}

export default Comunidade;