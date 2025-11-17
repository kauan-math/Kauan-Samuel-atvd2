import styles from './App.module.css'


import { useState, useEffect } from 'react'
import { Card } from './components/card'

function App() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    fetch('/cardsInfo.json')
      .then(response => response.json())
      .then(data => {
        setDados(data)
      })
  }, [])
  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">introdução</a>
        <a href="#s2">Imagens</a>
        <a href="#s3">temp</a>
        <a href="#s4">temp</a>
        <a href="#s5">cessar fogo</a>
        <a href="#s6">Contato</a>
      </nav>
      <main>
        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className='' src='/img1.jpg' alt="Foto" />
          </div>

          <div className={styles.right}>
            <h2 className={styles.title}>Sobre a Guerra</h2>
            <p className={styles.paragraph}>O conflito entre Israel e Palestina é uma disputa territorial complexa e de longa data, cujas raízes remontam ao final do século XIX com o surgimento do sionismo e o subsequente Mandato Britânico, que prometeu um "lar nacional" judeu na região. A partilha da ONU em 1947 e a subsequente criação do Estado de Israel em 1948 levaram à primeira guerra árabe-israelense e ao deslocamento de centenas de milhares de palestinos (a Nakba). Desde então, o conflito evoluiu através de múltiplas guerras e tentativas de paz fracassadas, centrado em questões espinhosas como fronteiras, o status de Jerusalém, assentamentos israelenses, refugiados e segurança mútua, resultando em um ciclo contínuo de violência e sofrimento para ambos os povos.</p>
          </div>
        </section>
        <section className={styles.s2} id='s2'>
          <h2 className={styles.tecTitle}>Imagens</h2>
          <p>dsada</p>
          <div className={styles.wrapCards}>
            {dados.map((item) => {
              return (
                <div key={item.id}>
                  <Card tec={item.tecnologia} image={item.imagem} text={item.texto} />
                </div>
              )
            })}
          </div>
        </section>

        <section id={styles.s3} className={styles.s3}>
        <h2>Temporario</h2>
        <p></p>
        </section>


        <section id={styles.s4} className={styles.s4}>
            <h2>Temporario</h2>
            <p></p>
        </section>

        <section id={styles.s5} className={styles.s5}>
          <h2>Cessar Fogo</h2>
          <p>A situação entre Israel e Palestina em novembro de 2025 é marcada por um frágil cessar-fogo em Gaza, após dois anos de intensos combates e um acordo mediado internacionalmente que prevê a libertação de reféns e a entrada de ajuda humanitária. O plano de paz enfrenta sérios obstáculos e acusações mútuas de violação, enquanto a Faixa de Gaza lida com uma crise humanitária devastadora e uma população majoritariamente deslocada. Politicamente, o primeiro-ministro Benjamin Netanyahu reitera sua oposição à criação de um Estado palestino independente, contrariando propostas de paz apoiadas pelos EUA e o crescente reconhecimento internacional da Palestina. A complexidade do cenário é agravada por tensões regionais, incluindo um breve conflito direto entre Israel e Irã em junho de 2025. Em resumo, o conflito em 2025 oscila entre tréguas incertas e confrontos esporádicos, com o futuro da paz e da reconstrução de Gaza permanecendo altamente volátil e incerto.</p>

        </section>

        <section id={styles.s6} className={styles.s6}>
          <h2>Contato</h2>
          <p></p>
        </section>

      </main>
    </>
  )
}
export default App