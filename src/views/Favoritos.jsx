import { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";

export default function Favoritos() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favorites.map((foto) => (
          <div key={foto.id} className="card">
            <img src={foto.src.tiny} alt={foto.alt} className="foto" />
          </div>
        ))}
      </div>
    </div>
  );
}
