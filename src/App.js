import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import Index from "./main/index";
import Switcher from "./components/Switcher";
import IndexTwo from "./main/index-two";
import IndexThree from "./main/index-three";
import IndexDark from "./main/index-dark";
import IndexRtl from "./main/index-rtl";
import { fetchUser } from "./redux/slice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index-two" element={<IndexTwo />} />
        <Route path="/index-three" element={<IndexThree />} />
        <Route path="/index-dark" element={<IndexDark />} />
        <Route path="/index-rtl" element={<IndexRtl />} />
      </Routes>
      <Switcher />
    </BrowserRouter>
  );
}

export default App;
