import styles from './Profile.module.css';

function Profile({ imagem, nome, curso, githubNick }) {
  return (
    <div className={styles.profile}>
      <img className={styles.profileImg} src={imagem} alt={`Imagem de ${nome}`} />
      <h2 className={styles.profileName}>{nome}</h2>
      <p className={styles.profileCurso}>Curso: {curso}</p>
      <p className={styles.profileGit}>
        GitHub:{" "}
        <a href={`https://github.com/${githubNick}`} target="_blank" rel="noopener noreferrer">
          github.com/{githubNick}
        </a>
      </p>
    </div>
  );
}

export default Profile;