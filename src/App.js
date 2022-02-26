import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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
