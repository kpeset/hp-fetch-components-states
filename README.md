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

Cette route aura un param : `:id`. Donc si nous utilisons le chemin  `/character/3873625562`, cela nous conduira sur la page `CharacterDetails`.


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

