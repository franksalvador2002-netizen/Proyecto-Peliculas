import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./Components/Sidebard";
import TopBar from "./Components/TopBar";
import Peliculas from "./Pages/Peliculas";
import Favoritas from "./Pages/Favoritas";
import Categorias from "./Pages/Categorias";
import Reportes from "./Pages/Reportes";
import MovieModal from "./Components/MovieModal";


export default function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <TopBar />

        <Routes>
          <Route path="/" element={<Peliculas />} />
          <Route path="/favoritas" element={<Favoritas />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>

        {openModal && (
          <MovieModal
            onClose={() => setOpenModal(false)}
            onSave={() => setOpenModal(false)} // ✔ sin refreshFavorites aquí
          />
        )}
      </div>
    </div>
  );
}
