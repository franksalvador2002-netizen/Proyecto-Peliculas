import { useEffect, useState } from "react";
import {
  promedioRating,
  peliculasPorCategoria,
  topRated
} from "../Services/reportesApi";

export default function Reportes() {

  const [promedio, setPromedio] = useState<number>(0);
  const [porCategoria, setPorCategoria] = useState<any[]>([]);
  const [top, setTop] = useState<any[]>([]);

  useEffect(() => {
    cargarReportes();
  }, []);

  const cargarReportes = async () => {

    const prom = await promedioRating();
    const cat = await peliculasPorCategoria();
    const topData = await topRated(3);

    setPromedio(prom);
    setPorCategoria(cat);
    setTop(topData);
  };

  return (
    <div className="p-5 space-y-6">

      {/* TITULO */}
      <h1 className="text-3xl font-bold text-red-700">
        Reportes
      </h1>

      {/* RESUMEN */}
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white p-4 shadow rounded">
          <p className="text-gray-500">Total películas</p>
          <p className="text-2xl text-red-500 font-bold">61</p>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <p className="text-gray-500">Mis favoritas</p>
          <p className="text-2xl text-red-500 font-bold">3</p>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <p className="text-gray-500">Promedio rating</p>
          <p className="text-2xl text-amber-300 font-bold">
            {promedio.toFixed(1)} ★
          </p>
        </div>

      </div>

      {/* POR CATEGORIA */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-bold mb-3 ">
          Películas por categoría
        </h2>

        {porCategoria.map((c, i) => (
          <div key={i} className="flex justify-between border-b py-1">
            <span>{c.categoria}</span>
            <span className="font-bold">{c.cantidad}</span>
          </div>
        ))}
      </div>

      {/* TOP 3 */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-bold mb-3">
          Top 3 mejor calificadas
        </h2>

        {top.map((p, i) => (
          <div key={i} className="border-b py-2">
            <p className="font-semibold">{p.titulo}</p>
            <p className="text-yellow-500">
              {"★".repeat(Math.floor(p.rating / 2))}
              {p.rating}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}