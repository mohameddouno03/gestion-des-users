import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Userform from "./Components/UserForm";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {
  function Layout() {
    const location = useLocation();
    return (
      <div className="App">
        {location.pathname === "/" && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
