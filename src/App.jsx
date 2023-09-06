import GryfondorCard from "./components/GryfondorCard"
import axios from "axios"
import { useState } from "react"

function App() {
  const [data, setData] = useState([])

  const getCharacters = () => {
    axios
      .get('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then((response) => {
        setData(response.data)
      })
  }
  return (
    <>
      <header className="homepage_header">
        <h1>Poudlard Papote</h1>
      </header>
      <section className="homepage_content">
        <div className="panel">
          <h2>Griffondor</h2>
          <p>Cliquez sur le bouton pour afficher les élèves de Griffondor.</p>
          <button onClick={getCharacters}>AFFICHER</button>
        </div>
        <div className="cards">
          {data.map((character) => character.image && <GryfondorCard key={character.id} character={character} />)}

        </div>
      </section>

    </>
  )
}

export default App
