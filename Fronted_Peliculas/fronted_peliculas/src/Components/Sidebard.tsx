import { NavLink } from "react-router-dom";
import { Film, Heart, Folder, BarChart } from "lucide-react";

export default function Sidebar() {

  const linkClass = ({ isActive }: any) =>
    `flex items-center gap-2 px-4 py-3 rounded-r-lg transition
    ${
      isActive
        ? "bg-red-700 text-white border-l-4 border-red-900"
        : "text-gray-200 hover:bg-red-800"
    }`;

  return (
    <div className="w-64 h-screen bg-red-800 text-white flex flex-col">

      {/* LOGO */}
      <div className="p-5 text-xl font-bold border-b border-red-900">
        🎬 Películas
      </div>

      {/* NAV */}
      <nav className="flex flex-col mt-4">

        <NavLink to="/" className={linkClass}>
          <Film size={18} />
          Películas
        </NavLink>

        <NavLink to="/categorias" className={linkClass}>
          <Heart size={18} />
          Categorias
        </NavLink>

        <NavLink to="/Favoritas" className={linkClass}>
          <Folder size={18} />
          Favoritas
        </NavLink>

        <NavLink to="/reportes" className={linkClass}>
          <BarChart size={18} />
          Reportes
        </NavLink>

      </nav>

    </div>
  );
}