import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        id: 0,
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        id: 1,
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        id: 2,
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  const sum = kurssi.osat[0].tehtavia + kurssi.osat[1].tehtavia + kurssi.osat[2].tehtavia;
  console.log("sum: " + sum)
  console.log("kurssiii: " + kurssi.nimi)
  console.log("kurssi: " + kurssi)
  return (
    <div>
      <Kurssi kurssi={kurssi} />
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto nimi={kurssi.osat[0].nimi} maara={kurssi.osat[0].tehtavia} />
      <Sisalto nimi={kurssi.osat[1].nimi} maara={kurssi.osat[1].tehtavia} />
      <Sisalto nimi={kurssi.osat[2].nimi} maara={kurssi.osat[2].tehtavia} />
      <Yhteensa sum={sum} />

    </div>
  )
}

const Kurssi = (props) => {
  console.log("otsikon saama props: " + props.kurssi.nimi)
  console.log("sisällön props: " + props.kurssi.osat)
  return (
    <div>
      <Otsikko kurssi={props.kurssi.nimi} />
      
      <Sisalto osat={props.kurssi.osat} />
    </div>
  )
}

const Otsikko = (props) => {
  console.log("otsake: " + props.kurssi)
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Sisalto = (props) => {
  console.log("Sisalto tulostus " + props)
  const {osat} = props;
 // console.log("osat: " + osat[0].nimi)
  //const rivit = () => osat.map(osa => <Osa key={osa.id} nimi={osa.nimi} maara={osa.tehtavia} />)
  const rivit = () => {
    console.log(osat)
    return osat.map(osa => <Osa key={osa.id} nimi={osa.nimi} maara={osa.tehtavia} />) 
  }
//<Osa nimi={osat[0].nimi} maara={osat[0].tehtavia} />
  return (
    <div>
      {rivit()}
    </div>
  )
}

/*const Sisalto = (props) => {
  return(
    <div>
     <Osa nimi={props.nimi} maara={props.maara}/>
    </div>
  )
}
*/
const Osa = (props) => {
    console.log("osa nimi: " + props.nimi)
    console.log("osa määrä: " + props.maara)
  return (
    <div>
      <p>{props.nimi} {props.maara}</p>
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>Yhteensä {props.sum} tehtävää</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
