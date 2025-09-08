import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Services from "./services.jsx";
import { useState } from "react";

// Detecta si estás en desarrollo o producción
const basename = import.meta.env.DEV ? "/" : "/app-react/";

function NombreComponente() {
  const [nombre, setNombre] = useState("");
  return (
    <div style={{ marginTop: "2em" }}>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        style={{ padding: "0.5em", fontSize: "1em" }}
      />
      {nombre && (
        <p>Hola {nombre}!</p>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className="Centrado">
                <h1>Hola Mundo!!</h1>
                <p>Mi primera aplicación desde VS Code en macOS 🍎</p>
                <button>Agregar Tarea</button>
                <NombreComponente />
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;