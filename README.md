# React : Création d'une route dynamique

## Objectif de l'atelier

Lors de cet atelier, nous avons vu comment créer une route dynamique qui enverra l'utilisateur vers une page dédiée au sorcier sur lequel nous cliquerons dans la page "Les maisons".
Nous utiliserons alors les params et son hook `useParams`, mais aussi le hook `useEffect` de react.

## Explication du code

### Création de la route

Comme nous l'avons vu précédemment, nous allons ajouter notre route depuis le composant `content.jsx` :

```
<Route path="/character/:id" element={<CharacterDetails />} />
```

Cette route aura un param : `:id`. Donc si nous utilisons le chemin `/character/3873625562`, cela nous conduira sur la page `CharacterDetails`.

### Création du lien

Pour permettre à l'utilisateur d'accéder aux détails d'un personnage de Poudlard, nous devons créer des liens dans notre composant **Houses.jsx**, dans la partie ou nous créons les cartes de tous les élèves.

```
{data.map((character) =>
  character.image ? (
    <Link key={character.id} to={`/character/${character.id}`}>
      <CharacterCard key={character.id} character={character} />
    </Link>
  ) : null
)}
```

**Rappel :** Ici nous avons utilisé la méthode de tableau `map` pour boucler sur la data que nous recevons via notre API. Consultez cette [**branche**](https://github.com/kpeset/hp-support-for-react/tree/step_01) pour un rappel.

Ici, chaque `CharacterCard` que nous allons générer via notre boucle, sera entourée par un `Link` :

```
<Link key={character.id} to={`/character/${character.id}`}>
```

Lorsque nous cliquerons sur notre carte, nous serons rediriger vers la route `/character/${character.id}`. Par exemple, notre lien ressemblera à ceci : `/character/4c7e6819-a91a-45b2-a454-f931e4a7cce3`.

**Note :** Le composant `Link` sera répété autant de fois qu'il y a de sorciers. C'est pour cette raison que nous lui avons donné une clé à ce composant afin d'éviter les erreurs dans la console.

### Création de la page

Pour le moment, notre page `CharacterDetails` n'affiche pas grand chose. Dans un premier temps, il est impératif de récupérer les params de notre url : `/character/4c7e6819-a91a-45b2-a454-f931e4a7cce3`.
Pour cela, nous allons utiliser le hook `useParams` :

```
const { id } = useParams();
```

Ici nous utiliserons le destructuring car nous savons que `useParams()` retourne un objet. De cette façon, nous pouvons récupérer les params qui nous intéressent.

**Rappel :** Puisque `useParams` est un hook, il faut d'abord l'importer avant de l'utiliser !

### Récupération de la data

Pour le moment nous n'avons récupéré que l'id du sorcier. Il est temps de faire une requête API pour avoir toutes les informations nécéssaires. Pour cela nous allons utiliser le hook `useEffect` afin de déclencher notre requête API :

```
  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/character/${id}`)
      .then((response) => {
        setData(response.data[0]);
      });
  }, []);
```

Le hook useEffect a pour utilité qu'à chaque fois que le composant est monté (c'est à dire lorsqu'il est exécuté), il va exécuter notre requête API.

**Important:** Dans notre `useEffect` nous avons mis un tableau de dépendance vide `[]`. Néanmoins, cela ne plaira pas forcément à notre ami **eslint**. Pour lui faire plaisir nous pouvons ajouter en dépendance notre `id`.
De cette façon, le `useEffect` se déclenchera uniquement au moment où l'id subit un changement. C'est un peu complexe dit comme ça, mais nous verrons ça plus en profondeur avec un autre exemple.

Maintenant, il ne nous reste plus qu'à afficher les informations que nous désirons :

```
 return (
    data && (
      <div>
        <p>{data.name}</p>
        <img src={data.image} alt={data.name} />
      </div>
    )
  );
```
