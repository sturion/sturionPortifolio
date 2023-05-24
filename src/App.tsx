
import logo from '/logo.svg'
import './App.css'
import { LogoContainer,Card,CardImg,CardContainer,PageContainer,LinkA } from './style'

function App() {

  return (
    <PageContainer>
      <LogoContainer>
        <img src={logo} className="logo" alt="Vite logo" />
        <h1>ouglas Sturion</h1>
      </LogoContainer>
      <CardContainer>
      <LinkA href="https://sturion.github.io/CovidPiracicaba/" target="_blank">
      <Card>
      
        <h3>Simulador COVID-19 &rarr;</h3>
            <CardImg src="/covid.svg" className="imageCard"></CardImg>
            <p>Website que mostra previsão de casos de covid até 10 dias na cidade de Piracicaba.</p>
      </Card>
      </LinkA>
      <LinkA href="https://sturion.github.io/Pokedex/" target="_blank">
      <Card>
      <h3>Pokedex &rarr;</h3>
            <CardImg src="/pokebola.png" className="imageCard"></CardImg>
            <p>Projeto de pokedex com HTML/CSS/JS com slider infinito usando API.</p>
      </Card>
      </LinkA>
      <LinkA href="https://sturion.github.io/ResistorCodeCalculator/" target="_blank">
      <Card>
      
      <h3>Calculadora Resistores &rarr;</h3>
            <CardImg src="/resistor.svg" className="imageCard"></CardImg>
            <p>Retorna o valor de um resistor ao escolher suas cores.</p>
      </Card> 
      </LinkA>
  
      </CardContainer>
      
    </PageContainer>
  )
}

export default App
