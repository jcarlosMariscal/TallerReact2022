import React, { Fragment } from "react";
import { BodyComponent } from "./bodyComponent";

// 1.Eliminar los archivos que no necesitamos: App.css, App.test.js,reportWebVital.js, setupTests.js. Con Logo.svg tengo mis dudas.
// 2. Cambiar la extensión de App.js (archivo actual) por App.jsx
// 3. Crear manualmente los archivos bodyComponent.jsx, firebase.js y proceso.jsx

// 4. Instalar: npm i firebase@8.7.1
// 5. Instalar: npm install -g firebase-tools

//  SUBIR PROYECTO
// 6. Ejecutar firebase login
// 7. Ejecutar firebase init

//  8. Ejecutar antes de terminar firebase init npm run build en otra terminal
//  9. Ejecutar firebase deploy

// DESDE FIREBASE:
//   Crear nuevo proyecto
//   Crear una aplicación
//   Agregar una bd Firestore database
// DIRIGIRSE A hosting
//  Seguir los pasos para subir el proyecto
function App() {
  return (
    <Fragment>
      {/* <div className="container mt-5">
        <div>
          <h1>Hola listos para empezar el taller</h1>
          <p>Soy JC</p>
        </div> 
        <div>
          <h1>Segundo bloque</h1>
          <p>Soy JC</p>
        </div>
      </div>*/}
      <BodyComponent />
    </Fragment>
  );
}

export default App;
