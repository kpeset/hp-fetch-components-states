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
Voici le code de la fonction :

```
  const addCharacterToFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
```
