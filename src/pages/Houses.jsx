import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import { Link } from "react-router-dom";

export default function Houses() {
  const [data, setData] = useState([]);

  const getCharacters = (event) => {
    const house = event.target.name;

    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/characters/`)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <section className="houses_content">
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
        {data.map((character) =>
          character.image ? (
            <Link key={character.id} to={`/character/${character.id}`}>
              <CharacterCard key={character.id} character={character} />
            </Link>
          ) : null
        )}
      </div>
    </section>
  );
}
