# React : Création de nos routes

## Objectif de l'atelier
Lors de cet atelier, nous avons vu comment créer des routes et comment les intégrer à notre navbar.

## Explication du code
### BrowserRouter
La première étape consiste à signaler à notre application que l'on va utiliser des routes. Pour cela, nous allons utiliser `BrowserRouter` dans notre fichier `App.jsx` de la façon suivante :

```
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

Maintenant, tous les enfants de `App.jsx` seront concernés par le router.

### Structure de notre application

C'est maintenant à travers le fichier `App.jsx` que nous allons définir la structure de notre application. Notre application aura un composant `header` dans lequel sera affiché le titre du site ainsi que la barre de navigation.
Nous aurons aussi un composant `content` qui affichera dynamiquement nos différentes pages :

```
function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}
```
**Important :** Nous aurions pu ajouter d'autre choses à notre structure (un footer, des sections pour les annonceurs ...).




