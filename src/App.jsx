import styles from "./App.module.css";

import facebookIcon from '/images/face.png';
import instagramIcon from '/images/insta.png';
import whatsappIcon from '/images/ww.png';

function App() {

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Sobre</a>
        <a href="#s2">Imagens</a>
        <a href="#s3">Causas</a>
        <a href="#s4">Impactos</a>
        <a href="#s5">Cessar Fogo</a>
        <a href="#s6">Situação atual</a>
      </nav>
      <main>
        <section className={styles.s1} id="s1">
          <div className={styles.left}>
            <img className={styles.guerra} width={500} height={500} src='/images/img1.jpg' alt="Guerra" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Sobre a Guerra</h2>
            <p className={styles.paragraph}>
              O conflito entre Israel e Palestina é uma disputa territorial
              complexa e de longa data, cujas raízes remontam ao final do século
              XIX com o surgimento do sionismo e o subsequente Mandato
              Britânico, que prometeu um "lar nacional" judeu na região. A
              partilha da ONU em 1947 e a subsequente criação do Estado de
              Israel em 1948 levaram à primeira guerra árabe-israelense e ao
              deslocamento de centenas de milhares de palestinos (a Nakba).
              Desde então, o conflito evoluiu através de múltiplas guerras e
              tentativas de paz fracassadas, centrado em questões espinhosas
              como fronteiras, o status de Jerusalém, assentamentos israelenses,
              refugiados e segurança mútua, resultando em um ciclo contínuo de
              violência e sofrimento para ambos os povos.
            </p>
          </div>
        </section>
        <section className={styles.s2} id="s2">
          <h2 className={styles.tecTitle}>Imagens</h2>
          <div className={styles.imageGallery}>
            <img
              className={styles.guerra}
              src={'/images/img2.jpeg'}
              alt="Imagem de Conflito 1"
            />
            <img
              className={styles.guerra}
              src={'/images/img7.webp'}
              alt="Imagem de Conflito 2"
            />

            <img
              className={styles.guerra}
              src={'/images/img6.png'}
              alt="Imagem de Conflito 3"
            />
          </div>

        </section>

        <section id="s3" className={styles.s3}>
          <h2>Causas</h2>
          <div className={styles.left}>
            <img className={styles.guerra} width={500} height={500} src='/images/img3.jpg' alt="Guerra" />
          </div>
          <div className={styles.right}>
            <p>A Guerra entre Israel e Hamas é um conflito que acontece desde o
              final dos anos 1980, quando o Hamas surgiu como braço armado da
              Irmandade Muçulmana na Faixa de Gaza, passando a integrar a
              resistência palestina contra a presença e a expansão do domínio
              israelense nos territórios palestinos.</p>
          </div>
        </section>

        <section id="s4" className={styles.s4}>
          <h2>Impactos</h2>
          <div className={styles.left}>
            <img className={styles.guerra} width={500} height={500} src='/images/img4.jpg' alt="Guerra" />
          </div>
          <p>A guerra entre Israel e Palestina gera graves crises humanitárias, instabilidade geopolítica global e impactos econômicos significativos, especialmente nos mercados de energia. A população de Gaza enfrenta uma situação catastrófica com escassez de suprimentos e infraestrutura destruída, resultando em milhares de vítimas e deslocados de ambos os lados. Economicamente, o conflito causa volatilidade e aumento nos preços globais de petróleo e gás, pressionando a inflação e as cadeias de suprimentos, além de afetar severamente as economias locais. Geopoliticamente, há um aumento da tensão regional com o risco de envolvimento de outros atores, o mundo se divide diplomaticamente e a questão da autodeterminação palestina e dos assentamentos israelenses continuam sendo os principais entraves para a paz.
          </p>
        </section>

        <section id="s5" className={styles.s5}>
          <h2>Cessar Fogo</h2>
          <p>
            A situação entre Israel e Palestina em novembro de 2025 é marcada
            por um frágil cessar-fogo em Gaza, após dois anos de intensos
            combates e um acordo mediado internacionalmente que prevê a
            libertação de reféns e a entrada de ajuda humanitária. O plano de
            paz enfrenta sérios obstáculos e acusações mútuas de violação,
            enquanto a Faixa de Gaza lida com uma crise humanitária devastadora
            e uma população majoritariamente deslocada. Politicamente, o
            primeiro-ministro Benjamin Netanyahu reitera sua oposição à criação
            de um Estado palestino independente, contrariando propostas de paz
            apoiadas pelos EUA e o crescente reconhecimento internacional da
            Palestina. A complexidade do cenário é agravada por tensões
            regionais, incluindo um breve conflito direto entre Israel e Irã em
            junho de 2025. Em resumo, o conflito em 2025 oscila entre tréguas
            incertas e confrontos esporádicos, com o futuro da paz e da
            reconstrução de Gaza permanecendo altamente volátil e incerto.
          </p>
        </section>

        <section id="s6" className={styles.s6}>
          <h2 className={''}>Eventos recentes e Situação atual</h2>
          <p className={styles.paragraph}>Ataques de 7 de Outubro de 2023: O estopim da atual fase do conflito ocorreu quando o Hamas lançou uma ofensiva sem precedentes no sul de Israel, resultando na morte de cerca de 1.200 pessoas e na tomada de reféns.</p>
          <p className={styles.paragraph}>Resposta de Israel: Em resposta, Israel iniciou uma grande operação militar em Gaza com o objetivo de destruir as capacidades militares e de governo do Hamas e libertar os reféns. A campanha causou dezenas de milhares de mortes e uma crise humanitária severa na Faixa de Gaza.</p>
          <p className={styles.paragraph}>Impacto Humanitário: A população de Gaza enfrenta escassez crítica de alimentos e suprimentos básicos devido aos bloqueios, com a maioria das pessoas em risco de fome extrema. Organizações de direitos humanos acusam Israel de possíveis crimes de guerra na Cisjordânia.</p>
          <p className={styles.paragraph}>Desdobramentos Regionais: O conflito também gerou tensões em outras frentes, com ataques entre Israel e o Hezbollah no Líbano, e um ataque de Israel ao Irã, aumentando a instabilidade regional. </p>
        </section>
      </main>
      <footer className={styles.rodape}>
        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={facebookIcon} alt="Facebook" /></a>
        <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={instagramIcon} alt="Instagram" /></a>
        <a href="https://www.whatsapp.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={whatsappIcon} alt="WhatsApp" /></a>
      </footer>

    </>
  );
}

export default App;
