import { Heart } from "lucide-react";
import { useState } from "react";
import { cambiarFavorita } from "../Services/peliculaApi";
import { useMovieContext } from "../Context/MovieContext";
import type { Pelicula } from "../Interface/Pelicula";

export default function MovieCard({ movie }: { movie: Pelicula }) {

  const { refreshFavorites } = useMovieContext();
  const [isFav, setIsFav] = useState(movie.esFavorita);

  const handleFavorite = async () => {

    // 🔥 cambio visual inmediato
    setIsFav(!isFav);

    try {
      await cambiarFavorita(movie.id);

      await refreshFavorites();

    } catch (error) {
      setIsFav(isFav); // rollback
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-3">

      <img
        src={movie.urlPortada}
        className="w-full h-60 object-cover"
      />

      <h2 className="font-bold mt-2">
        {movie.titulo}
      </h2>

      <p className="text-sm text-gray-500">
        {movie.categoriaNombre}
      </p>

      <p className="text-yellow-500">
        {"★".repeat(Math.floor(movie.rating / 2))}
      </p>

      <button onClick={handleFavorite} className="mt-2">
        <Heart
          className={`w-5 h-5 ${
            isFav ? "text-red-500 fill-red-500" : "text-gray-400"
          }`}
        />
      </button>

    </div>
  );
}