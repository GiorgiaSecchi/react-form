import { useState } from "react";

function App() {
  return (
    <>
      <div className="container text-center ">
        <h1 className="m-5">ARTICOLI</h1>
        <hr />
        <form action="">
          <input
            className="p-3 w-50"
            type="text"
            placeholder="Inserisci titolo articolo..."
          />
          <button className="btn btn-primary ms-3">Invia</button>
        </form>
      </div>
    </>
  );
}

export default App;
