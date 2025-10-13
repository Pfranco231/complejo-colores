import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';



const App = () => {
  return(
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App