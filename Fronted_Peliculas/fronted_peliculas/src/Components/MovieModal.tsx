import { useEffect, useState } from "react";
import { crearPelicula } from "../Services/peliculaApi";
import { getCategorias } from "../Services/categoriaApi";
import type { Pelicula } from "../Interface/Pelicula";

interface Props {
  onClose: () => void;
  onSave: () => void;
}

export default function MovieModal({ onClose, onSave }: Props) {

  const [categorias, setCategorias] = useState<any[]>([]);

  const [form, setForm] = useState<Pelicula>({
    id: 0,
    titulo: "",
    director: "",
    anio: new Date().getFullYear(),
    sinopsis: "",
    urlPortada: "",
    rating: 0,
    esFavorita: false,
    categoriaId: 1,
    categoriaNombre: ""
  });

  // CARGAR CATEGORIAS
  useEffect(() => {
    const loadCategorias = async () => {
      const data = await getCategorias();
      setCategorias(data);
    };

    loadCategorias();
  }, []);

  // MANEJO DE INPUTS
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "anio" ||
        name === "rating" ||
        name === "categoriaId"
          ? Number(value)
          : value
    }));
  };

  // GUARDAR PELICULA
  const handleSubmit = async () => {
    await crearPelicula({
      ...form,
      anio: Number(form.anio),
      rating: Number(form.rating),
      categoriaId: Number(form.categoriaId)
    });

    onSave();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-white p-5 rounded-lg w-[500px] max-h-[90vh] overflow-y-auto">

        <h2 className="text-2xl font-bold mb-4">
          Nueva Película
        </h2>

        <input
          name="titulo"
          placeholder="Título"
          onChange={handleChange}
          className="border w-full p-2 mb-3"
        />

        <input
          name="director"
          placeholder="Director"
          onChange={handleChange}
          className="border w-full p-2 mb-3"
        />

        <input
          type="number"
          name="anio"
          placeholder="Año"
          onChange={handleChange}
          className="border w-full p-2 mb-3"
        />

        <textarea
          name="sinopsis"
          placeholder="Sinopsis"
          onChange={handleChange}
          rows={4}
          className="border w-full p-2 mb-3"
        />

        <input
          name="urlPortada"
          placeholder="URL portada"
          onChange={handleChange}
          className="border w-full p-2 mb-3"
        />

        <input
          type="number"
          step="0.1"
          min="0"
          max="10"
          name="rating"
          placeholder="Rating (0-10)"
          onChange={handleChange}
          className="border w-full p-2 mb-3"
        />

        <select
          name="categoriaId"
          onChange={handleChange}
          className="border w-full p-2 mb-4"
        >
          {categorias.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre}
            </option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          className="bg-red-700 text-white w-full p-2 rounded"
        >
          Guardar
        </button>

        <button
          onClick={onClose}
          className="w-full mt-2 text-gray-600"
        >
          Cancelar
        </button>

      </div>
    </div>
  );
}
