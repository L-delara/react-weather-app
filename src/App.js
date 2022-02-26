import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="text-muted">
          An{" "}
          <a
            href="https://github.com/L-delara/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>{" "}
          by
          <a
            href="https://www.linkedin.com/in/ligia-de-lara-01627873/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Ligia De Lara
          </a>{" "}
          😊
        </footer>
      </div>
    </div>
  );
}
