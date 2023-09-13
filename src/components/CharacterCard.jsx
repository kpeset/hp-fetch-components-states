/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function CharacterCard({ character }) {
  return (
    <div className="card">
      {<img src={character.image} alt={character.name} />}
      <h2>{character.name}</h2>
    </div>
  );
}

export default CharacterCard;
