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

### Création de nos routes

C'est le composant `content.jsx` qui va être en charge d'afficher les différentes pages. C'est donc dans ce composant que nous devons créer nos routes :

```
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/maisons" element={<Houses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
```
Analysons ce code :
- path : Le path est le chemin que l'utilisateur devra entrer dans la barre de recherche de son navigateur
- element : L'element est le composant/page qui sera affiché sur notre interface lorsque nous accédons au path auquel il est lié.

**Important :** Pensez toujours à importer les pages et composants :

```
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Houses from "../pages/Houses";
import Contact from "../pages/Contact";
```

### Création des liens

Nous avons ensuite cré les liens de navigation dans notre navbar qui se situe dans le composant `Header.jsx` :

```
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Poudlard Papote</h1>
      <nav>
        <div className="line_nav" />
        <ul>
          <li>
            <Link to="/">Page d'accueil</Link>
          </li>
          <li>
            <Link to="/maisons">Les maisons de Poudlard</Link>
          </li>
          <li>
            <Link to="/contact">Nous contacter</Link>
          </li>
        </ul>
        <div className="line_nav" />
      </nav>
    </header>
  );
}
```

Nous utilisons ici `<Link>` pour créer nos liens (jusqu'à maintenant, en HTML, nous utilisions `<a>`) :

```
<Link to="/maisons">Les maisons de Poudlard</Link>
```
