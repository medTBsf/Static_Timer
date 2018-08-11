import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Timer from "./components/timer.js";

ReactDOM.render(<Timer />, document.getElementById("root"));
registerServiceWorker();
