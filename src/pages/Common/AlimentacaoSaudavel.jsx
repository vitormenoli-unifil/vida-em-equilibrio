import React, { useState } from 'react'
import styles from './AlimentacaoSaudavel.module.css'

const classifications = [
  {
    label: 'Muito Ruim (Magreza Grave)',
    color: '#FF0000',
    mainMessage: 'Atenção! Seu IMC está muito abaixo do ideal',
    encouragement: 'Este é um sinal de alerta para a sua saúde.',
    suggestions: [
      'Procure um médico e nutricionista o quanto antes.',
      'Inclua alimentos calóricos e nutritivos: abacate, castanhas, azeite.',
      'Faça pequenas refeições a cada 3 horas.'
    ]
  },
  {
    label: 'Ruim (Magreza Moderada)',
    color: '#FF4500',
    mainMessage: 'Seu IMC indica magreza moderada',
    encouragement: 'Vamos aumentar seu aporte calórico com equilíbrio.',
    suggestions: [
      'Adicione carboidratos complexos: arroz integral, batata-doce.',
      'Inclua proteínas magras: ovos, peito de frango, peixe.',
      'Faça lanches nutritivos: iogurte com granola e frutas secas.'
    ]
  },
  {
    label: 'Ruim (Magreza Leve)',
    color: '#FFA500',
    mainMessage: 'Você está levemente abaixo do peso ideal',
    encouragement: 'Ajustes simples podem fazer a diferença.',
    suggestions: [
      'Turbin e o café da manhã com shakes de frutas e aveia.',
      'Inclua oleaginosas como nozes e amêndoas.',
      'Pratique exercícios de força para ganho de massa muscular.'
    ]
  },
  {
    label: 'Regular (IMC Baixo-Normal)',
    color: '#FFD700',
    mainMessage: 'Seu IMC está um pouco abaixo da média saudável',
    encouragement: 'Você está quase lá! Mantenha hábitos balanceados.',
    suggestions: [
      'Equilibre carboidratos, proteínas e gorduras boas.',
      'Aumente a ingestão de fibras: legumes, frutas e grãos integrais.',
      'Mantenha uma hidratação adequada.'
    ]
  },
  {
    label: 'Bom (Peso Normal, faixa baixa)',
    color: '#ADFF2F',
    mainMessage: 'Parabéns! Seu IMC está dentro da faixa saudável',
    encouragement: 'Continue com uma alimentação equilibrada.',
    suggestions: [
      'Proteínas magras: peixe, frango, leguminosas.',
      'Carboidratos complexos: quinoa, batata-doce.',
      'Gorduras boas: abacate, azeite e sementes.',
      'Muitas fibras: frutas, verduras e grãos.'
    ]
  },
  {
    label: 'Muito Bom (Peso Ideal)',
    color: '#32CD32',
    mainMessage: 'Excelente! Você está no peso ideal',
    encouragement: 'Mantenha os bons hábitos que já pratica.',
    suggestions: [
      'Varie fontes de proteína: ovos, tofu, peixes.',
      'Equilibre suas refeições com legumes coloridos.',
      'Evite o excesso de açúcar e sódio.',
      'Pratique atividade física regularmente.'
    ]
  },
  {
    label: 'Regular (Sobrepeso leve)',
    color: '#FFD700',
    mainMessage: 'Início de sobrepeso detectado',
    encouragement: 'Alguns ajustes podem ajudar a voltar à faixa ideal.',
    suggestions: [
      'Reduza ultraprocessados e frituras.',
      'Aumente o consumo de vegetais e fibras.',
      'Adote caminhadas diárias ou exercícios leves.'
    ]
  },
  {
    label: 'Ruim (Sobrepeso Moderado)',
    color: '#FFA500',
    mainMessage: 'Sobrepeso moderado identificado',
    encouragement: 'É hora de intensificar cuidados.',
    suggestions: [
      'Corte excesso de açúcares e refrigerantes.',
      'Inclua atividades aeróbicas (corrida, bike).',
      'Busque orientação nutricional se possível.'
    ]
  },
  {
    label: 'Muito Ruim (Obesidade Grau 1)',
    color: '#FF4500',
    mainMessage: 'Obesidade Grau 1',
    encouragement: 'Reajustes alimentares são fundamentais.',
    suggestions: [
      'Prioriz e vegetais, frutas e grãos integrais.',
      'Evite alimentos ricos em gorduras saturadas.',
      'Comece um acompanhamento nutricional.'
    ]
  },
  {
    label: 'Muito Ruim (Obesidade Grau 2)',
    color: '#FF0000',
    mainMessage: 'Obesidade Grau 2',
    encouragement: 'Alto risco de complicações, atue já.',
    suggestions: [
      'Corte ultraprocessados e alimentos ricos em açúcar.',
      'Busque acompanhamento médico e nutricional.',
      'Introduza exercícios com supervisão profissional.'
    ]
  },
  {
    label: 'Extremamente Ruim (Obesidade Grau 3)',
    color: '#8B0000',
    mainMessage: 'Obesidade Mórbida',
    encouragement: 'Procure ajuda especializada imediatamente.',
    suggestions: [
      'Reeducação alimentar com equipe multidisciplinar.',
      'Foque em alimentos in natura e preparações simples.',
      'Monitore sua evolução com profissionais da saúde.'
    ]
  }
];

function AlimentacaoSaudavel() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setImc] = useState(null)
  const [score, setScore] = useState(null)

  const textoSaudavel = `Uma alimentação saudável é fundamental para fornecer energia, nutrientes e bem-estar ao corpo.
Inclua diariamente frutas, verduras, proteínas magras, grãos integrais e gorduras boas.
Evite excesso de açúcar, sódio e alimentos ultraprocessados.`

  function calcularIMC(e) {
    e.preventDefault()
    const p = parseFloat(peso)
    const a = parseFloat(altura)
    if (!p || !a) return
    const valor = p / (a * a)
    setImc(valor.toFixed(2))
    setScore(getScore(valor))
  }

  function getScore(valor) {
    if (valor < 16) return 0
    if (valor < 17) return 1
    if (valor < 18.5) return 2
    if (valor < 20.1) return 3
    if (valor < 22.1) return 4
    if (valor < 25) return 5
    if (valor < 27) return 6
    if (valor < 30) return 7
    if (valor < 35) return 8
    if (valor < 40) return 9
    return 10
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Alimentação Saudável</h1>
      <p className={styles.subtitle}>{textoSaudavel}</p>

      <section className={styles.section}>
        <h2>O que é IMC?</h2>
        <p>
          O Índice de Massa Corporal (IMC) é um indicador simples usado pela OMS para avaliar o
          estado nutricional com base na relação peso-altura. Ele auxilia na identificação de magreza,
          peso ideal, sobrepeso e obesidade, servindo como guia inicial para cuidados de saúde.
        </p>
        <code className={styles.code}>IMC = Peso (kg) ÷ (Altura × Altura) (m²)</code>
      </section>

      <section className={styles.section}>
        <h2>Calculadora de IMC</h2>
        <form onSubmit={calcularIMC} className={styles.form}>
          <input type="number" step="0.1" placeholder="Peso (kg)" value={peso} onChange={e => setPeso(e.target.value)} className={styles.input} />
          <input type="number" step="0.01" placeholder="Altura (m)" value={altura} onChange={e => setAltura(e.target.value)} className={styles.input} />
          <button type="submit" className={styles.button}>Calcular</button>
        </form>
      </section>

      {imc && (
        <section className={styles.section}>
          <h2>Resultado</h2>
          <p>Seu IMC é <strong>{imc}</strong></p>
          <p>
            <span style={{ color: classifications[score].color, fontWeight: 'bold' }}>
              {classifications[score].label}
            </span>
          </p>
          <div className={styles.suggestion} style={{ borderColor: classifications[score].color }}>
            <p className={styles.mainMessage}>{classifications[score].mainMessage}</p>
            <p className={styles.encouragement}>{classifications[score].encouragement}</p>
            <ul className={styles.suggestionList}>
              {classifications[score].suggestions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}

export default AlimentacaoSaudavel