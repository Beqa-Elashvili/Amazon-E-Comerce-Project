import React from "react";
import ReactDOM from "react-dom/client";
import App from "@src/App";

import { Providers } from "@src/providers/Providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  // </React.StrictMode>
);
