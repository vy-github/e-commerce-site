import "./App.css";
import CardItem from "./components/CardItem";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Welcome Shopping Site
      </h3>
      <CardItem />
    </div>
  );
}

export default App;
