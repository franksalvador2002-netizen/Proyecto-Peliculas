import { useMovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

export default function Favoritas() {

  const { favorites } = useMovieContext();

  return (
    <div className="p-5">

      <h1 className="text-2xl font-bold text-red-700">
        Mis Favoritas
      </h1>

      <p className="text-gray-600 mb-4">
        {favorites.length} películas guardadas
      </p>

      <div className="grid grid-cols-4 gap-4">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
}