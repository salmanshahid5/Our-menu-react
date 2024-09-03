import Card from "./Components/Card";
import "./Components/Card.css";
import Header from "./Components/Header/Header";
// import "./App.css";
import { menu } from "./Data/Data";

function App() {
  return (
    <div className="App">
      <Header />
      {menu.map((item, index) => (
        <Card
          key={index}
          url={item.url}
          name={item.name}
          price={item.price}
          discription={item.discription}
        />
      ))}
    </div>
  );
}

export default App;
