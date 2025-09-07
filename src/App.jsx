function App() {
  return (
    <div className="App">
      <div className="Centrado">
        <h1>Hola Mundo!!</h1>
        <p>Mi primera aplicación desde VS Code en macOS 🍎</p>
          <button>Agregar Tarea</button>
           <NombreComponente />
      </div>
    </div>
  );
}
export default App;

import { useState } from "react";

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