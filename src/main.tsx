import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./themes.css";
import { RadioProvider } from "./context/RadioContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider>
        <RadioProvider>
            <App />
        </RadioProvider>
    </ThemeProvider>
);
