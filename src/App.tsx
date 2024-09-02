import React from "react";
import "./styles/app.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App: React.FC = () => {
  return (
    <main className="app-container">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
