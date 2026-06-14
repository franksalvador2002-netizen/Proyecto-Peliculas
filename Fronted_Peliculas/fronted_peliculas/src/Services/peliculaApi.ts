import axios from "axios";

const API = "http://localhost:8080/api/peliculas";

export const getPeliculas = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const crearPelicula = async (data: any) => {
  const res = await axios.post(API, data);
  return res.data;
};

export const actualizarPelicula = async (id: number, data: any) => {
  const res = await axios.put(`${API}/${id}`, data);
  return res.data;
};

export const eliminarPelicula = async (id: number) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};

export const buscarPeliculas = async (q: string) => {
  const res = await axios.get(`${API}/buscar?q=${q}`);
  return res.data;
};

export const cambiarFavorita = async (id: number) => {
  const res = await axios.patch(`${API}/${id}/favorita`);
  return res.data;
};

export const getFavoritas = async () => {
  const res = await axios.get("http://localhost:8080/api/peliculas/favoritas");
  return res.data;
};