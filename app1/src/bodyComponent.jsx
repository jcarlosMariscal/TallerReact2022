import React from "react";
import { Proceso } from "./proceso";

// rafc
export const BodyComponent = () => {
  return (
    <div className="container py-4">
      <header className="pd-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <img
            src="https://miro.medium.com/proxy/1*6kK9j74vyOmXYm1gN6ARhQ.png"
            alt="React"
            width={40}
          />
          <span className="fs-4">
            <strong>Taller React</strong>
          </span>
        </a>
      </header>

      <div>
        <h1 class="visually-hidden">Heroes examples</h1>

        <div class="px-4 py-5 my-5 text-center">
          <img
            class="d-block mx-auto mb-4"
            src="https://miro.medium.com/proxy/1*6kK9j74vyOmXYm1gN6ARhQ.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="display-5 fw-bold">
            Una biblioteca de JavaScript para construir interfaces de usuario
          </h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              React te ayuda a crear interfaces de usuario interactivas de forma
              sencilla. Diseña vistas simples para cada estado en tu aplicación,
              y React se encargará de actualizar y renderizar de manera
              eficiente los componentes correctos cuando los datos cambien. Las
              vistas declarativas hacen que tu código sea más predecible, por lo
              tanto, fácil de depurar.
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Primary button
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Proceso />
      </div>

      <footer className="pt-3 mt-4 text-muted border-top text-center">
        &copy; UT Tehuacán, Taller de React 22/julio/2022.
      </footer>
    </div>
  );
};
