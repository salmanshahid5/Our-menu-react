import React from "react";
import Card from "./Components/Card";
import "./Components/Card.css";
import Header from "./Components/Header/Header";
import { menu } from "./Data/Data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="foodContainer">
      {menu.map((item, index) => (
        <Card
          key={index}
          url={item.url}
          name={item.name}
          price={item.price}
          description={item.discription}
        />
      ))}
    </div>
    </div>
  );
}

export default App;
