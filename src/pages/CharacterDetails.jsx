import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

export default function CharacterDetails() {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/character/${id}`)
      .then((response) => {
        setData(response.data[0]);
      });
  }, [id]);

  const addCharacterToFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    data && (
      <div className="character_content">
        <p>{data.name}</p>
        <img src={data.image} alt={data.name} />
        <button onClick={() => addCharacterToFavorites(data.id)}>
          Ajouter aux favoris
        </button>
      </div>
    )
  );
}
