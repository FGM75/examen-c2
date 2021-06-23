import { useState } from "react";
import { Cabecera } from "./componentes/Cabecera";
import { Lista6Amigos } from "./componentes/Lista6Amigos";

function App() {
  const [FormularioAbierto, SetFormulario] = useState(null);
  const [amigos, setAmigos] = useState([]);
  const urlAPI = "http://localhost:3001/amigos/";
  const nuevoAmigo = async (amigos) => {
    const amigoCreado = await fetch(urlAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amigos),
    });
    if (amigoCreado) {
      setAmigos([...amigos, amigoCreado]);
    }
  };
  const borrarAmigo = async (amigos) => {
    const respuesta = await fetch(urlAPI + amigos.id, {
      method: "DELETE",
    });
    if (respuesta) {
      setAmigos(amigos.filter((amigo) => amigo.id !== amigos.id));
    }
  };
  const editaramigo = async (amigos) => {
    const amigosModificado = await fetch(urlAPI + amigos.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amigos),
    });
    if (amigosModificado) {
      setAmigos(
        amigos.map((amigosGato) => {
          if (amigos.id === amigosModificado.id) {
            return {
              ...amigos,
              amigos: amigosModificado.amigos,
            };
          } else {
            return amigos;
          }
        })
      );
    }
  };

  return (
    <div className="contenedor-general container-xl">
      <Cabecera />
      <div>
        <main className="principal row">
          <Lista6Amigos />
        </main>
      </div>
    </div>
  );
}

export default App;
