import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 gap-2 bg-white rounded-lg shadow-lg">
      <div>
        <h1 className="text-3xl font-bold text-red-500 ">Mini-Projet</h1>
      </div>
      <div className="flex gap-2 m-3 font-medium ">
        <Link className=" hover:text-red-500 hover:text-xl" to="/">
          Accueil
        </Link>
        <Link className=" hover:text-red-500 hover:text-xl "to="/register">S'inscrire</Link>
        <Link className=" hover:text-red-500 hover:text-xl" to="/login">Connexion</Link>
      </div>
    </nav>
  );
}
export default Navbar;
