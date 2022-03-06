import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Charlotte" />

        <footer className="text-muted">
          This project is an{" "}
          <a
            href="https://github.com/L-delara/react-weather-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source code
          </a>{" "}
          hosted on{" "}
          <a
            href="https://affectionate-mayer-a17386.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify
          </a>{" "}
          by
          <a
            href="https://www.linkedin.com/in/ligia-de-lara-01627873/"
            target="_blank"
            rel="noopener noreferrer"
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
