import styles from './TemaProjeto.module.css';

function TemaProjeto() {
  return (
    <div className={styles.container}>
      <div className={styles.vida}>
        <h1 className={styles.title}>Tema do Projeto</h1>
        <img src="/logo.png" alt="Vida em Equilíbrio" />
      </div>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Introdução ao Problema</h2>
        <p>
          Atualmente, muitas pessoas enfrentam dificuldades para encontrar informações confiáveis sobre saúde e bem-estar.
          A grande quantidade de conteúdos disponíveis online pode ser confusa, levando a práticas inadequadas.
        </p>
        <p>
          Nosso objetivo é centralizar dicas e informações verificadas, promovendo um estilo de vida equilibrado e saudável.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Justificativa</h2>
        <p>
          Escolhemos este tema porque acreditamos que a saúde é um dos pilares fundamentais para o bem-estar físico e mental.
          A falta de conhecimento pode levar a problemas como sedentarismo, má alimentação e estresse.
        </p>
        <p>
          Além disso, o projeto incentiva boas práticas, contribuindo para um ambiente mais consciente e informativo.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Relação com a Extensão Curricular</h2>
        <p>
          A extensão curricular permite que alunos apliquem o conhecimento acadêmico em situações reais,
          trazendo benefícios tanto para a comunidade quanto para seu desenvolvimento profissional.
        </p>
        <p>
          Com este projeto, buscamos unir teoria e prática, incentivando o aprendizado contínuo e o impacto positivo na sociedade.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Objetivos do Projeto</h2>
        <ul className={styles.list}>
          <li>Fornecer conteúdos educativos sobre saúde e bem-estar.</li>
          <li>Promover um estilo de vida equilibrado através de dicas confiáveis.</li>
          <li>Incentivar práticas saudáveis de alimentação e exercícios físicos.</li>
          <li>Relacionar conhecimento acadêmico com aplicação prática na sociedade.</li>
        </ul>
      </section>
    </div>
  );
}

export default TemaProjeto;