import React from "react";
import Main from "./Components/Main";
import Account from "./Components/Account";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Account/:id" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
