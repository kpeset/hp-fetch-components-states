# React : Appeler notre API dynamiquement

## Objectif de l'atelier
Lors de cet atelier, nous avons vu comment utiliser les routes de notre API de façon dynamique.
Précédemment, seuls les élèves de Griffondor étaient affichés. Nous avons donc crée un bouton pour chaque maison de Poudlard.

## Explication du code
### La requête API
Nous allons exécuter la même fonction à la différence que la route de l'API sera différente.
On pourrait se dire que l'on pourrait créer une fonction de requête API pour chaque maison de Poudlard. Après tout, il n'y en a que quatre. Mais imaginons que ce n'était pas quatre maison, mais des centaines? Pour palier à ça, nous allons écrire notre route de la façon suivante :

```
.get(`https://hp-api.onrender.com/api/characters/house/${house}`)
```

Nous avons utiliser `${house}` dans l'url. La variable house sera dynamique.
**Attention** : N'oubliez pas d'entourer l'url avec des **backtick** !

Dans notre url, `${house}` fait référence à la variable suivante :
```
const house = event.target.name
```

### Création des boutons

La variable `house` se réfère au nom des boutons sur lesquels nous appuyons lorsque la fonction `getCharacters` est exécutée :

```
<button name="hufflepuff" onClick={getCharacters}>POUFSOUFFLE</button>
```

Si je clique sur ce bouton, l'url de notre API sera `https://hp-api.onrender.com/api/characters/house/hufflepuff`.


