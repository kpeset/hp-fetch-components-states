# React : Notre premiere requête API

## Objectif de l'atelier
Lors de cet atelier, nous avons vu comment utiliser axios pour faire une requête API et utiliser ce que nous renvoyait l'API.

## Explication du code
### La requête API
Dans un premier temps, nous avons crée une fonction `getCharacters`, qui permet de récupérer les personnages que va nous envoyer l'API.

```
  const getCharacters = () => {
    axios
      .get('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then((response) => {
        setData(response.data)
      })
  }
```

Cette fonction sera exécutée à chaque fois nous cliquons sur le bouton.

```
<button onClick={getCharacters}>AFFICHER</button>
```

Dans la fonction `getCharacters`, nous enregistrons la réponse dans le state `data` :

```
setData(response.data)
```

### Transmission des datas à notre composant

Dans un premier temps, nous devons créer le composant `GryfondorCard.jsx` :

```
function GryfondorCard({ character }) {
    return (
        <div className="card">
            {<img src={character.image} alt={character.name} />}
            <h2>{character.name}</h2>

            <p>{character.house}</p>
        </div>
    )
}
```

Notre composant reçoit en props `character` que nous avons crée lorsqu'on appelle notre composant dans `App.jsx`.

```
<GryfondorCard character={data} />
```

Néanmoins, nous recevoir de la part de l'API plusieurs personnages. C'est pour cette raison que nous allons devoir boucler sur la réponse API pour créer un composant à chaque personnage :

```
{data.map((character) => character.image && <GryfondorCard key={character.id} character={character} />)}
```

Nous utilisons ici la méthode `map` qui permet à chaque tour de boucle de créer un composant Gryfondor.
Le code `character.image &&` permet de stipuler que nous n'afficherons les données des objets dont la propriété image n'est pas vide.
