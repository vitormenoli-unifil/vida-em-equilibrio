import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Bem-vindo ao Vida em Equilíbrio</h1>
        <p className={styles.subtitle}>
          Seu portal de dicas e informações para uma vida mais saudável e equilibrada.
        </p>
      </header>

      <section className={styles.introduction}>
        <h2>Por que escolher o Vida em Equilíbrio?</h2>
        <p>
          Encontrar informações confiáveis e práticas sobre saúde pode ser um desafio. Nosso site reúne dicas e orientações de especialistas para ajudar você a manter uma rotina saudável, cuidar da mente e do corpo, e promover um estilo de vida mais equilibrado.
        </p>
      </section>

      <section className={styles.dicas}>
        <h2>Dicas em Destaque</h2>
        <div className={styles.dicaItem}>
          <h3>Alimentação Saudável</h3>
          <p>
            Descubra receitas, dicas de nutrição e orientações para manter uma dieta balanceada e saborosa.
          </p>
        </div>
        <div className={styles.dicaItem}>
          <h3>Atividades Físicas</h3>
          <p>
            Encontre exercícios simples e eficazes para incorporar na sua rotina, melhorando sua saúde física e disposição.
          </p>
        </div>
        <div className={styles.dicaItem}>
          <h3>Bem-Estar Mental</h3>
          <p>
            Técnicas de meditação, dicas para reduzir o estresse e promover o equilíbrio emocional no dia a dia.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;