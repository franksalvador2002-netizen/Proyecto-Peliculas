import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import MovieModal from "../Components/MovieModal";

import { getPeliculas }
from "../Services/peliculaApi";

import { getCategorias }
from "../Services/categoriaApi";

import type { Pelicula }
from "../Interface/Pelicula";

export default function Peliculas() {

  const [peliculas, setPeliculas] =
    useState<Pelicula[]>([]);

  const [todasPeliculas, setTodasPeliculas] =
    useState<Pelicula[]>([]);

  const [categorias, setCategorias] =
    useState<any[]>([]);

  const [busqueda, setBusqueda] =
    useState("");

  const [categoriaSeleccionada,
    setCategoriaSeleccionada] =
    useState("");

  const [ratingSeleccionado,
    setRatingSeleccionado] =
    useState("");

  const [mostrarModal,
    setMostrarModal] =
    useState(false);

  const cargarPeliculas = async () => {

    const data =
      await getPeliculas();

    setPeliculas(data);

    setTodasPeliculas(data);
  };

  const cargarCategorias = async () => {

    const data =
      await getCategorias();

    setCategorias(data);
  };

  useEffect(() => {

    cargarPeliculas();

    cargarCategorias();

  }, []);

  const aplicarFiltros = (
    texto: string,
    categoria: string,
    rating: string
  ) => {

    let resultado =
      [...todasPeliculas];

    if (texto.trim() !== "") {

      resultado =
        resultado.filter(
          (p) =>
            p.titulo
              .toLowerCase()
              .includes(
                texto.toLowerCase()
              ) ||
            p.director
              .toLowerCase()
              .includes(
                texto.toLowerCase()
              )
        );
    }

    if (categoria !== "") {

      resultado =
        resultado.filter(
          (p) =>
            p.categoriaId ===
            Number(categoria)
        );
    }

    if (rating !== "") {

      resultado =
        resultado.filter(
          (p) =>
            p.rating / 2 >=
            Number(rating)
        );
    }

    setPeliculas(resultado);
  };

  return (

    <div className="p-5">

      {/* CABECERA */}

      <div
        className="
        flex
        justify-between
        items-center
        mb-6"
      >

        <h1
          className="
          text-3xl
          font-bold
          text-red-700"
        >
          Películas
        </h1>

        <button
          onClick={() =>
            setMostrarModal(true)
          }
          className="
          bg-red-700
          text-white
          px-4
          py-2
          rounded-lg
          hover:bg-red-800"
        >
          + Nueva Película
        </button>

      </div>

      {/* FILTROS */}

      <div
        className="
        flex
        flex-wrap
        gap-3
        mb-6"
      >

        <input
          type="text"
          placeholder="Buscar película..."
          value={busqueda}
          onChange={(e) => {

            const valor =
              e.target.value;

            setBusqueda(valor);

            aplicarFiltros(
              valor,
              categoriaSeleccionada,
              ratingSeleccionado
            );

          }}
          className="
          border
          p-2
          rounded-lg
          flex-1
          min-w-[250px]"
        />

        <select
          value={
            categoriaSeleccionada
          }
          onChange={(e) => {

            const valor =
              e.target.value;

            setCategoriaSeleccionada(
              valor
            );

            aplicarFiltros(
              busqueda,
              valor,
              ratingSeleccionado
            );

          }}
          className="
          border
          p-2
          rounded-lg"
        >

          <option value="">
            Todas las categorías
          </option>

          {categorias.map((c) => (

            <option
              key={c.id}
              value={c.id}
            >
              {c.nombre}
            </option>

          ))}

        </select>

        <select
          value={
            ratingSeleccionado
          }
          onChange={(e) => {

            const valor =
              e.target.value;

            setRatingSeleccionado(
              valor
            );

            aplicarFiltros(
              busqueda,
              categoriaSeleccionada,
              valor
            );

          }}
          className="
          border
          p-2
          rounded-lg"
        >

          <option value="">
            Todas
          </option>

          <option value="4">
            4 ★ o más
          </option>

          <option value="4.5">
            4.5 ★ o más
          </option>

          <option value="5">
            5 ★
          </option>

        </select>

      </div>

      {/* GRID */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5"
      >

        {peliculas.map((p) => (

          <MovieCard
            key={p.id}
            movie={p}
          />

        ))}

      </div>

      {/* MODAL */}

      {mostrarModal && (

        <MovieModal
          onClose={() =>
            setMostrarModal(false)
          }
          onSave={() =>
            cargarPeliculas()
          }
        />

      )}

    </div>
  );
}