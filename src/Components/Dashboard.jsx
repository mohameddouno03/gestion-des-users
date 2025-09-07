import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center space-y-4">
        <h2 className="text-2xl font-bold text-blue-700">
          Bienvenue sur le Dashboard 🎉
        </h2>
        <p className="text-gray-600">Vous êtes connecté avec succès.</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
