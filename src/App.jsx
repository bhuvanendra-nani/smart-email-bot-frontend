import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Internship from "./pages/Internship";
import Placement from "./pages/Placement";
import OnlineTests from "./pages/OnlineTests";
import Academics from "./pages/Academics";
import Other from "./pages/Other";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/online-tests" element={<OnlineTests />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
}

