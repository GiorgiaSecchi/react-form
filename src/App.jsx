import { useState } from "react";

function App() {
  const articles = [];

  const [addNewArticle, setAddNewArticle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`L'articolo "${addNewArticle}" è stato INVIATO!`);
  };

  return (
    <>
      <div className="container text-start ">
        <h1 className="mt-5 mb-4">ARTICOLI</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="p-2 w-50"
            type="text"
            placeholder="Inserisci titolo articolo..."
            value={addNewArticle}
            onChange={(e) => {
              setAddNewArticle(e.target.value);
            }}
          />
          <button className="btn btn-primary ms-3">Invia</button>
        </form>
        <hr />
        <ul className="text-start list-group">
          <li className="list-group-item d-flex justify-content-between">
            prova
            <button className="btn btn-outline-danger btn-sm ms-3 ">
              Elimina
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
