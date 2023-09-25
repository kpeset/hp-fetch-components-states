import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Poudlard Papote</h1>
      <nav>
        <div className="line_nav" />
        <ul>
          <li>
            <Link to="/">Page d&apos;accueil</Link>
          </li>
          <li>
            <Link to="/maisons">Les maisons de Poudlard</Link>
          </li>
          <li>
            <Link to="/favorites">Mes favoris</Link>
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
