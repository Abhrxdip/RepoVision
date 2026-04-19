import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initWebContainer } from "./lib/webcontainer";

try {
  initWebContainer();
} catch (error) {
  console.warn("WebContainer initialization failed:", error);
  // Continue rendering app even if WebContainer fails
}

createRoot(document.getElementById("root")!).render(<App />);
