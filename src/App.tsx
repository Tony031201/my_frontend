// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from "./pages/LoginPage.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WhoamiPage from './pages/Whoami.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/whoami" element={<WhoamiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
