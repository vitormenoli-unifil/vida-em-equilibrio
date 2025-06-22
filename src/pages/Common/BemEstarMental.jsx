import React, { useState, useEffect } from 'react'
import styles from './BemEstarMental.module.css'

const questions = [
  { id: 1, text: 'Como você avalia seu nível de estresse hoje?' },
  { id: 2, text: 'Qual a qualidade do seu sono na última noite?' },
  { id: 3, text: 'Como está seu nível de concentração?' },
  { id: 4, text: 'Você se sentiu ansioso(a) recentemente?' },
  { id: 5, text: 'Você tem facilidade para relaxar?' },
  { id: 6, text: 'Como está seu humor geral?' },
  { id: 7, text: 'Com que frequência você se exercita?' },
  { id: 8, text: 'Como avalia suas interações sociais?' },
  { id: 9, text: 'Você reserva tempo para hobbies?' },
  { id: 10, text: 'Você sente energia para as tarefas diárias?' }
]

const quotes = [
  '“A saúde mental não é um destino, mas uma jornada.”',
  '“Pequenas pausas podem renovar grandes corações.”',
  '“Respirar fundo é o primeiro passo para clarear a mente.”',
  '“Você merece um momento de paz hoje.”',
  '“Cuidar de si mesmo é um ato de coragem.”'
]

function BemEstarMental() {
  const [quote, setQuote] = useState('')
  const [started, setStarted] = useState(false)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const idx = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[idx])
  }, [])

  function handleStart() {
    setStarted(true)
  }

  function handleChange(id, value) {
    setAnswers(prev => ({ ...prev, [id]: parseInt(value) }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (Object.keys(answers).length === questions.length) {
      setSubmitted(true)
    }
  }

  function handleRestart() {
    setStarted(false)
    setAnswers({})
    setSubmitted(false)
  }

  function calculateScore() {
    const total = Object.values(answers).reduce((sum, v) => sum + v, 0)
    return total / questions.length
  }

  function getResult(score) {
    if (score <= 1.5) return {
      title: 'Péssimo',
      color: '#FF0000',
      paragraph: 'Seu bem-estar mental está em um nível crítico. É importante buscar apoio e adotar práticas de autocuidado imediatamente.',
      topics: [
        'Procure ajuda profissional: psicólogo ou psiquiatra.',
        'Estabeleça uma rotina de sono consistente.',
        'Pratique técnicas de relaxamento diárias.'
      ]
    }
    if (score <= 2.5) return {
      title: 'Ruim',
      color: '#FFA500',
      paragraph: 'Você está enfrentando dificuldades que podem afetar seu dia a dia. Pequenas mudanças podem trazer alívio.',
      topics: [
        'Faça pausas curtas para respirar profundamente.',
        'Dedique tempo a um hobby relaxante.',
        'Converse com alguém de confiança sobre seus sentimentos.'
      ]
    }
    if (score <= 3.5) return {
      title: 'Moderado',
      color: '#FFD700',
      paragraph: 'Seu bem-estar mental está relativamente estável, mas ainda há espaço para melhorias.',
      topics: [
        'Experimente meditação guiada por 5–10 minutos.',
        'Mantenha atividade física regular.',
        'Reserve momentos diários para gratidão.'
      ]
    }
    if (score <= 4.5) return {
      title: 'Bom',
      color: '#ADFF2F',
      paragraph: 'Parabéns! Seu bem-estar mental está em um bom nível. Continue com hábitos saudáveis.',
      topics: [
        'Compartilhe seus hábitos positivos com amigos.',
        'Continue praticando exercícios e autocuidado.',
        'Mantenha seu equilíbrio entre trabalho e lazer.'
      ]
    }
    return {
      title: 'Excelente',
      color: '#32CD32',
      paragraph: 'Você demonstra um excelente nível de bem-estar mental. Mantenha essa rotina e ajude outras pessoas com sua experiência.',
      topics: [
        'Incentive outras pessoas a cuidar da saúde mental.',
        'Explore novas técnicas de autocuidado.',
        'Compartilhe seu conhecimento em grupos de apoio.'
      ]
    }
  }

  const score = submitted ? calculateScore() : null
  const result = submitted ? getResult(score) : null

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-Estar Mental</h1>
      <p className={styles.quote}>{quote}</p>
      <p className={styles.intro}>
        Este formulário contém 10 perguntas rápidas sobre seu estado emocional e hábitos diários.
        Ao final, você receberá um feedback detalhado para melhorar seu bem-estar mental.
      </p>

      {!started && !submitted && (
        <button onClick={handleStart} className={styles.startButton}>
          Iniciar Avaliação
        </button>
      )}

      {started && !submitted && (
        <form onSubmit={handleSubmit} className={styles.form}>
          {questions.map(q => (
            <div key={q.id} className={styles.question}>
              <label className={styles.label}>{q.text}</label>
              <select
                value={answers[q.id] || ''}
                onChange={e => handleChange(q.id, e.target.value)}
                className={styles.select}
                required
              >
                <option value="" disabled>Selecione (1-5)</option>
                <option value="1">1 - Pouco</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 - Muito</option>
              </select>
            </div>
          ))}
          <button type="submit" className={styles.button}>Ver Resultado</button>
        </form>
      )}

      {submitted && result && (
        <div className={styles.resultBox} style={{ borderColor: result.color }}>
          <h2 className={styles.resultTitle} style={{ color: result.color }}>{result.title}</h2>
          <p className={styles.resultParagraph}>{result.paragraph}</p>
          <ul className={styles.topics}>
            {result.topics.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
          <button onClick={handleRestart} className={styles.restartButton}>
            Reiniciar Avaliação
          </button>
        </div>
      )}

      <div className={styles.extraInfo}>
        <h3>Dica Extra</h3>
        <p>
          Manter um diário de gratidão pode ajudar a focar em aspectos positivos do dia a dia.
          Anote três coisas pelas quais você é grato todas as manhãs.
        </p>
      </div>
    </div>
  )
}

export default BemEstarMental
