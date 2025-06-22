import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './AtividadesFisicas.module.css'

const metValues = {
    'Caminhada Leve': 3,
    'Corrida Leve': 7,
    Ciclismo: 6,
    Musculacao: 5,
    Yoga: 2.5
}

const activityTips = [
    'Alongue-se antes e depois do exercício para evitar lesões.',
    'Hidrate-se bem durante todo o dia.',
    'Combine exercícios aeróbicos e de força para melhores resultados.',
    'Aumente a intensidade gradualmente conforme sua evolução.',
    'Ouça seu corpo e respeite seus limites.'
]

function AtividadesFisicas() {
    const [peso, setPeso] = useState('')
    const [duracao, setDuracao] = useState('')
    const [atividade, setAtividade] = useState('Caminhada Leve')
    const [calorias, setCalorias] = useState(null)

    const [imcInput, setImcInput] = useState('')
    const [imcSuggestion, setImcSuggestion] = useState('Calcule seu IMC para obter sugestões personalizadas.')

    const [randomTip, setRandomTip] = useState('')

    useEffect(() => {
        const idx = Math.floor(Math.random() * activityTips.length)
        setRandomTip(activityTips[idx])
    }, [])

    function calcularGasto(e) {
        e.preventDefault()
        const p = parseFloat(peso)
        const d = parseFloat(duracao)
        const met = metValues[atividade]
        if (!p || !d) return
        const gasto = met * p * (d / 60)
        setCalorias(gasto.toFixed(0))
    }

    function getSuggestion(imc) {
        if (!imc) return 'Calcule seu IMC para obter sugestões personalizadas.'
        const valor = parseFloat(imc)
        if (isNaN(valor)) return 'Insira um número válido.'
        if (valor < 18.5) return 'Com IMC baixo, prefira atividades de menor impacto e foco em fortalecimento muscular leve.'
        if (valor < 25) return 'IMC ideal! Mantenha o equilíbrio entre atividades aeróbicas e de força.'
        return 'Com IMC elevado, priorize exercícios de baixo impacto e aumente a intensidade gradualmente.'
    }

    useEffect(() => {
        setImcSuggestion(getSuggestion(imcInput))
    }, [imcInput])

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Atividades Físicas</h1>
                <p className={styles.subtitle}>
                    Manter-se ativo melhora sua saúde física e mental.{' '}
                    <Link to="/alimentacao-saudavel" className={styles.link}>
                        Calcule seu IMC
                    </Link>{' '}
                    e receba dicas personalizadas!
                </p>
            </div>

            <section className={styles.section}>
                <h2>Calculadora de Gasto Calórico</h2>
                <form onSubmit={calcularGasto} className={styles.form}>
                    <input
                        type="number"
                        step="0.1"
                        placeholder="Peso (kg)"
                        value={peso}
                        onChange={e => setPeso(e.target.value)}
                        className={styles.input}
                    />
                    <input
                        type="number"
                        placeholder="Duração (min)"
                        value={duracao}
                        onChange={e => setDuracao(e.target.value)}
                        className={styles.input}
                    />
                    <select
                        value={atividade}
                        onChange={e => setAtividade(e.target.value)}
                        className={styles.select}
                    >
                        {Object.keys(metValues).map(act => (
                            <option key={act} value={act}>{act}</option>
                        ))}
                    </select>
                    <button type="submit" className={styles.button}>Calcular</button>
                </form>
                {calorias && (
                    <p className={styles.result}>
                        Você gastou aproximadamente <strong>{calorias} kcal</strong>.
                    </p>
                )}
            </section>

            <section className={styles.section}>
                <h2>Dicas Baseadas no Seu IMC</h2>
                <input
                    type="number"
                    step="0.1"
                    placeholder="Digite seu IMC"
                    value={imcInput}
                    onChange={e => setImcInput(e.target.value)}
                    className={styles.input}
                />
                <p className={styles.suggestion}>{imcSuggestion}</p>
            </section>

            <section className={styles.section}>
                <h2>Dica para você:</h2>
                <p className={styles.tip}>{randomTip}</p>
            </section>
        </div>
    )
}

export default AtividadesFisicas