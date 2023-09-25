import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Houses from "../pages/Houses";
import Contact from "../pages/Contact";
import CharacterDetails from "../pages/CharacterDetails";
import Favorites from "../pages/Favorites";

export default function Content() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/maisons" element={<Houses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
