import ReactDOM from "react-dom/client";
import "./index.css";
import { Headline } from "./components/Headline/Headline";
import { Logos } from "./components/Logos/Logos";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <main className="app-container">
    <Logos />
    <Headline />
  </main>
);
