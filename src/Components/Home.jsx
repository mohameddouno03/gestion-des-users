import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-zinc-950 p-[15%] h-max">
      <h1 className="text-white text-2xl">
        Bienvenue sur ma page de gesion des{" "}
        <span className="text-red-500 font-bold"> APi</span> des utilisateurs
      </h1>
      <div>
        <Link to="/Register">
          <button className="text-black font-medium bg-white p-2 rounded-lg m-3 hover:bg-blue-500 hover:text-white">
            S'inscrire
          </button>
        </Link>
        <Link to="/Login">
          <button className="text-black font-medium bg-white p-2 rounded-lg m-3 hover:bg-blue-500 hover:text-white">
            Connexion
          </button>
        </Link>
      </div>
    </section>
  );
}
export default Home;
