import ReactDOM from "react-dom/client";
import App from "@src/App";

import { Providers } from "@src/providers/Providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
    <App />
  </Providers>
);
