import { useState } from "react";

import {
  crearCategoria,
  actualizarCategoria
} from "../Services/categoriaApi";

import type { Categoria }
from "../Interface/Categoria";

interface Props {
  categoria?: Categoria | null;
  onClose: () => void;
  onSave: () => void;
}

export default function CategoryModal({
  categoria,
  onClose,
  onSave
}: Props) {

  const [nombre, setNombre] =
    useState(
      categoria?.nombre || ""
    );

  const [descripcion,
    setDescripcion] =
    useState(
      categoria?.descripcion || ""
    );

  const guardar =
    async () => {

      try {

        const data = {
          nombre,
          descripcion
        };

        if (categoria) {

          await actualizarCategoria(
            categoria.id,
            data
          );

        } else {

          await crearCategoria(
            data
          );

        }

        onSave();
        onClose();

      } catch (error) {

        console.error(error);

      }

    };

  return (

    <div
      className="
      fixed inset-0
      bg-black/50
      flex justify-center
      items-center"
    >

      <div
        className="
        bg-white
        p-5
        rounded-lg
        w-[400px]"
      >

        <h2
          className="
          text-xl
          font-bold
          mb-4"
        >

          {categoria
            ? "Editar Categoría"
            : "Nueva Categoría"}

        </h2>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) =>
            setNombre(
              e.target.value
            )
          }
          className="
          border
          w-full
          p-2
          mb-3"
        />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) =>
            setDescripcion(
              e.target.value
            )
          }
          className="
          border
          w-full
          p-2
          mb-3"
        />

        <button
          onClick={guardar}
          className="
          bg-red-700
          text-white
          w-full
          p-2
          rounded"
        >
          Guardar
        </button>

        <button
          onClick={onClose}
          className="
          w-full
          mt-2"
        >
          Cancelar
        </button>

      </div>

    </div>

  );
}