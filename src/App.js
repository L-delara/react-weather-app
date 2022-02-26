import "./App.css";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <br />
        An{" "}
        <a href="https://github.com/L-delara/react-weather-app.git">
          open-source code
        </a>{" "}
        by Ligia De Lara 😊
      </div>
    </div>
  );
}
