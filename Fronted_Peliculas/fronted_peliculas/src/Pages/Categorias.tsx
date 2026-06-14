import { useEffect, useState } from "react";

import {
  getCategorias,
  eliminarCategoria
} from "../Services/categoriaApi";

import {
  peliculasPorCategoria
} from "../Services/reportesApi";

import type { Categoria }
from "../Interface/Categoria";

import CategoryModal
from "../Components/CategoriaModal";

export default function Categorias() {

  const [categorias,
    setCategorias] =
    useState<Categoria[]>([]);

  const [reporte,
    setReporte] =
    useState<any[]>([]);

  const [mostrarModal,
    setMostrarModal] =
    useState(false);

  const [categoriaEditar,
    setCategoriaEditar] =
    useState<Categoria | null>(null);

  const cargarDatos =
    async () => {

      try {

        const categoriasData =
          await getCategorias();

        const reporteData =
          await peliculasPorCategoria();

        setCategorias(
          categoriasData
        );

        setReporte(
          reporteData
        );

      } catch (error) {

        console.error(error);

      }

    };

  useEffect(() => {

    cargarDatos();

  }, []);

  const abrirNuevaCategoria =
    () => {

      setCategoriaEditar(null);

      setMostrarModal(true);

    };

  const abrirEditarCategoria =
    (categoria: Categoria) => {

      setCategoriaEditar(categoria);

      setMostrarModal(true);

    };

  const handleEliminar =
    async (id: number) => {

      const confirmar =
        window.confirm(
          "¿Desea eliminar esta categoría?"
        );

      if (!confirmar) return;

      try {

        await eliminarCategoria(id);

        cargarDatos();

      } catch (error: any) {

        alert(
          error.response?.data?.message ||
          "No se puede eliminar la categoría"
        );

      }

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
          Categorías
        </h1>

        <button
          onClick={
            abrirNuevaCategoria
          }
          className="
          bg-red-700
          text-white
          px-4
          py-2
          rounded-lg
          hover:bg-red-800"
        >
          + Nueva Categoría
        </button>

      </div>

      {/* GRID */}

      <div
        className="
        grid
        md:grid-cols-2
        gap-4"
      >

        {categorias.map((c) => {

          const cantidad =
            reporte.find(
              (r) =>
                r.categoria ===
                c.nombre
            )?.cantidad || 0;

          return (

            <div
              key={c.id}
              className="
              bg-white
              rounded-xl
              shadow-md
              p-5"
            >

              <h2
                className="
                text-xl
                font-bold"
              >
                {c.nombre}
              </h2>

              <p
                className="
                text-gray-500
                mt-2"
              >
                {c.descripcion}
              </p>

              <p
                className="
                text-red-700
                font-semibold
                mt-3"
              >
                {cantidad} películas
              </p>

              <div
                className="
                flex
                gap-2
                mt-4"
              >

                <button
                  onClick={() =>
                    abrirEditarCategoria(c)
                  }
                  className="
                  bg-blue-600
                  text-white
                  px-3
                  py-1
                  rounded"
                >
                  Editar
                </button>

                <button
                  onClick={() =>
                    handleEliminar(c.id)
                  }
                  className="
                  bg-red-600
                  text-white
                  px-3
                  py-1
                  rounded"
                >
                  Eliminar
                </button>

              </div>

            </div>

          );

        })}

      </div>

      {/* MODAL */}

      {mostrarModal && (

        <CategoryModal
          categoria={
            categoriaEditar
          }
          onClose={() => {

            setMostrarModal(false);

            setCategoriaEditar(
              null
            );

          }}
          onSave={cargarDatos}
        />

      )}

    </div>

  );
}