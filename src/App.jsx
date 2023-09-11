import axios from "axios";
import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);

  const getCharacters = (event) => {
    const house = event.target.name;

    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <>
      <Header />
      <section className="homepage_content">
        <div className="panel">
          <h2>Maisons de Poudlard</h2>
          <p>
            Cliquez sur le bouton pour afficher les élèves de la maison
            correspondante.
          </p>
          <div className="nav_houses">
            <button name="gryffindor" onClick={getCharacters}>
              GRYFFONDOR
            </button>
            <button name="hufflepuff" onClick={getCharacters}>
              POUFSOUFFLE
            </button>
            <button name="ravenclaw" onClick={getCharacters}>
              SERDAIGLE
            </button>
            <button name="slytherin" onClick={getCharacters}>
              SERPENTARD
            </button>
          </div>
        </div>
        <div className="cards">
          {data.map(
            (character) =>
              character.image && (
                <CharacterCard key={character.id} character={character} />
              )
          )}
        </div>
      </section>
    </>
  );
}

export default App;
