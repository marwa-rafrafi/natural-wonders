import Card from "./components/card";
import { WondersArr } from "./Data";
import Login from "./components/login";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const filteredWonders = WondersArr.filter((wonder) =>
    wonder.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">NATURAL WONDERS</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="rechercher une merveille"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredWonders.map((wonder) => (
          <Card key={wonder.id} wonder={wonder} />
        ))}
      </div>
      {filteredWonders.length === 0 && (
        <p className="text-center text-muted mt-3">
          aucune merveille trouvée
        </p>
      )}
     <Login/>
    </div>
  );
}



export default App;