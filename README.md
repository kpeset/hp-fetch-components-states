# React : Favoris et localStorage
## Objectif de l'atelier

Lors de cet atelier, nous avons vu comment enregistrer des favoris dans un `localStorage` afin de pouvoir fetcher une liste d'id et donc afficher les personnages favoris.

## Explication du code

### Enregistrer une liste d'id

Pour enregistrer des ids dans nos favoris, nous allons utiliser un bouton qui va enregistrer les ids un à un dans le `localStorage`.

```
<button onClick={() => addCharacterToFavorites(data.id)}>
  Ajouter aux favoris
</button>
```

Ici nous avons un bouton qui lorsque l'on clique dessuis, il execute la fonction `addCharacterToFavorites` en prenant en paramètre l'id du personnage.
Voici le code de la fonction `addCharacterToFavorites`:

```
  const addCharacterToFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
```

Dans la fonction, la première chose à faire est de créer une variables `favorites`. Cette variable aura deux possibilités de valeur. Dans un premier temps nous cherchons dans le localStorage la clé `favorites`. Si cette clé n'existe pas alors `||` nous aurons un tableau vide `[]`.

**RAPPEL :** Le localStorage est une chaine de caractère. Pour ajouter / supprimer des choses de façon dynamique, nous avons besoin de le transformer en tableau. C'est pour cela que nous avons utilisé la méthode `JSON.parse`.

Ensuite nous mettons une condition :

```
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
```

Nous vérifions si l'id que nous voulons enregistrer n'est pas déjà présent dans notre `localStorage`. 
Si la condition est respectée nous executerons deux choses :
- `favorites.push(id)` : Nous ajoutons à notre tableau `favorites` l'id
- `localStorage.setItem("favorites", JSON.stringify(favorites));` : Nous enregistrons dans le localStorage avec la méthode `setItem`.

**RAPPEL :** Le localStorage est uniquement en string, c'est pour cette raison que nous utilisons la méthode javascript `JSON.stringify`.

### Récupérer nos favoris

Après avoir crée une page **favoris**, nous allons maintenant fetcher la liste d'id.
Déjà nous allons créer la même variable favorites vue précédemment : `let favorites = JSON.parse(localStorage.getItem("favorites")) || [];`
Puis maintenant nous allons fetcher notre liste au sein d'un `useEffect` :

```
  useEffect(() => {
    const requests = favorites.map((id) => {
      return axios.get(`https://hp-api.onrender.com/api/character/${id}`);
    });

    Promise.all(requests).then((responses) => {
      setData(responses);
    });
  }, []);
```

Nous avons plusieurs id dans notre liste de favoris. C'est pour cela que nous allons boucler sur notre tableau en utilisant la méthode `map` :

```
    const requests = favorites.map((id) => {
      return axios.get(`https://hp-api.onrender.com/api/character/${id}`);
    });
```

Nous allons utiliser la méthode `Promise.all` qui nous permet de vérifier que la requête axios a fonctionné. Puis ensuite nous stockons la data dans un state :

```
    Promise.all(requests).then((responses) => {
      setData(responses);
    });
```
