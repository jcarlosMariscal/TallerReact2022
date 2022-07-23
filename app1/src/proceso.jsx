import React, { useEffect, useState } from "react";
import { firebase } from "./firebase";

export const Proceso = () => {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  const [nota, setNota] = useState("");

  // Funcion agregar
  const agregar = async (e) => {
    e.preventDefault();
    try {
      // Conectamos
      const db = firebase.firestore();
      // Crear mi json
      const nuevaTarea = {
        tarea,
        nota,
      };
      // Mando a coleccion mi json
      const data = await db.collection("tareas").add({
        tarea: tarea,
        nota: nota,
      });
      setTareas([...tareas, { id: data.id, ...nuevaTarea }]);

      console.log("funciona");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Obtener datos de mi base por función
    const obtenerDatos = async () => {
      const db = firebase.firestore();
      try {
        const data = await db.collection("tareas").get();
        console.log(data);
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayData);
        setTareas(arrayData);
      } catch (error) {
        console.log(error);
      }
    };

    // Llamar a mi función
    obtenerDatos();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h1>Lista de Tareas</h1>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>UID</th>
                <th>TAREA</th>
                <th>NOTA</th>
                <th>EDITAR</th>
                <th>BORRAR</th>
              </tr>
            </thead>
            <tbody>
              {
                // Consumir mi arreglo tarea
                tareas.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tarea}</td>
                    <td>{item.nota}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h1>Formulario</h1>
          <form onSubmit={agregar}>
            <p>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Tarea aquí"
                required
                onChange={(e) => setTarea(e.target.value)}
              />
            </p>
            <p>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Nota aquí"
                required
                onChange={(e) => setNota(e.target.value)}
              />
            </p>
            <button className="btn btn-dark">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
