import { useMovieContext } from "../Context/MovieContext";

export default function TopBar() {
  const { favorites } = useMovieContext();

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold text-red-700">
        Sistema de Películas
      </h1>

      
    </div>
  );
}