import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home heading="Generate a Secured Password Now!" />}></Route>
            <Route exact path='/about' element={<About />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
