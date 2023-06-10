import "../assets/css/galeria.css";
import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";
import Heart from "./Heart";
import fotos from "../data/fotos.json";

export default function Home() {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const handleFill = (foto) => {
    if (favorites.includes(foto)) {
      removeFavorite(foto);
      foto.liked = false;
    } else {
      addFavorite(foto);
      foto.liked = true;
    }
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.photos.map((foto) => (
        <div onClick={() => handleFill(foto)} key={foto.id} className="card" >
          <img src={foto.src.tiny} alt={foto.alt} className="foto" />
          <div className="card-body">
            <h2 className="alt">{foto.alt}</h2>
            <div className="heart">
            <Heart filled={foto.liked}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
