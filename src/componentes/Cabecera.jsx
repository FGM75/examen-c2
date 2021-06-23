import React from "react";
export const Cabecera = () => {
  return (
    <header className="row col">
      <h1>Gestión de mis 6 amigos</h1>
      <span>
        Nombre:<input></input>
      </span>
      <span>
        Apellido:<input></input>
      </span>
      <span>Valoración:</span>
      <div className="flex-end">
        <button type="submit" className="Crear btn btn-info">
          Crear
        </button>
        <button type="button" className="Cancelar btn btn-info">
          Cancelar
        </button>
      </div>
    </header>
  );
};
