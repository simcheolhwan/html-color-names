import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.scss"
import App from "./app/App"

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
