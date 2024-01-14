import { Route, Routes, Navigate, Link } from 'react-router-dom';
import MainPage from "pages/MainPage";
import ErrorPage from 'pages/ErrorPage';
import DetailPage from 'pages/DetailPage';
import Header from 'components/Header'
import Footer from 'components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/:id" element={<DetailPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
