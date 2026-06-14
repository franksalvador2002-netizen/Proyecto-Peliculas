import axios from "axios";

const API = "http://localhost:8080/api/categorias";

export const getCategorias = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const crearCategoria = async (data: any) => {
  const res = await axios.post(API, data);
  return res.data;
};

export const actualizarCategoria = async (id: number, data: any) => {
  const res = await axios.put(`${API}/${id}`, data);
  return res.data;
};

export const eliminarCategoria = async (id: number) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};