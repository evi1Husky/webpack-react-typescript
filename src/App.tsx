import ReactDOM from "react-dom/client";
import "./index.css";
import { Headline } from "./components/Headline/Headline";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <div className="app-container">
    <Headline />
  </div>
);
