/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function GryfondorCard({ character }) {
    return (
        <div className="card">
            {<img src={character.image} alt={character.name} />}
            <h2>{character.name}</h2>

            <p>{character.house}</p>
        </div>
    )
}

export default GryfondorCard
