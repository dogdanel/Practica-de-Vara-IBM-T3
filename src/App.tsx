import React from "react";
import { DealsSection } from "./components/organisms/DealsSection/DealsSection";
import "./styles/variables.css";

function App() {
 return (
  <div style={{ padding: "1rem", background: "var(--background)" }}>
   <DealsSection />
  </div>
 );
}

export default App;
