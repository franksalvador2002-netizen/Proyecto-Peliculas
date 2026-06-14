import { createContext, useContext, useEffect, useState } from "react";
import { getFavoritas } from "../Services/peliculaApi";
import type { Pelicula } from "../Interface/Pelicula";

interface MovieContextType {
  favorites: Pelicula[];
  refreshFavorites: () => void;
}

const MovieContext = createContext<MovieContextType | null>(null);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("Error Context");
  return context;
};

export const MovieProvider = ({ children }: any) => {

  const [favorites, setFavorites] = useState<Pelicula[]>([]);

  const refreshFavorites = async () => {
  const data = await getFavoritas();
  setFavorites(data);
};

  useEffect(() => {
    refreshFavorites();
  }, []);

  return (
    <MovieContext.Provider value={{ favorites, refreshFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};