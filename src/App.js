import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../src/components/Home";
import SR from "../src/components/SpeechRecognition";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toggle-voice-search" element={<SR />} />
      </Routes>
    </BrowserRouter>
  );
    
}
