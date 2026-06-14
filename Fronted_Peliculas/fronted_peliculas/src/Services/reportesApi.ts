import axios from "axios";

const API = "http://localhost:8080/api/reportes";

export const peliculasPorCategoria = async () => {
  const res = await axios.get(`${API}/peliculas-por-categoria`);
  return res.data;
};

export const topRated = async (size: number = 5) => {
  const res = await axios.get(`${API}/top-rated?size=${size}`);
  return res.data;
};

export const promedioRating = async () => {
  const res = await axios.get(`${API}/promedio-rating`);
  return res.data;
};