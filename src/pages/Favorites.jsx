import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Favorites() {
  const removeFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter((favorite) => favorite !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    window.location.reload();
  };

  const [data, setData] = useState([]);
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  useEffect(() => {
    const requests = favorites.map((id) => {
      return axios.get(`https://hp-api.onrender.com/api/character/${id}`);
    });

    Promise.all(requests).then((responses) => {
      setData(responses);
    });
  }, []);

  return (
    <>
      {data.map((character) => (
        <div key={character.data[0].id} className="favorites_result">
          <CharacterCard character={character.data[0]} />
          <button onClick={() => removeFavorite(character.data[0].id)}>
            Supprimer des favoris
          </button>
        </div>
      ))}
    </>
  );
}
