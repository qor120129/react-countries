import { Route, Routes, Navigate, Link } from 'react-router-dom';
import MainPage from "pages/MainPage";
import ErrorPage from 'pages/ErrorPage';
import Loading from 'components/Loading'
import { useState } from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>

  )
}

export default App
