import "./App.css";
import Card from "./components/Card";

import db from "./assets/data";
import { useState } from "react";

function App() {
  const [data, setData] = useState(db)
  return (
    <div className="container">
      <div className="grid">
        {data.map(items => (
          <Card key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
}

export default App;
