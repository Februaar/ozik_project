import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./AuthContext";
import { DataProvider } from "./context/context";
import { MenuProvider } from "./context/MenuContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
