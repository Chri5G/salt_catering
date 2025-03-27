import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home'
import NotFound from './components/NotFound'
import Header from './components/Header';
import Catering from './components/Catering';
import Sourdough from './components/Sourdough';

function App() {

  return (
    <Router>
      {/* <Header /> */}
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />} />
          <Route path='/catering' element={<Catering />} />
          <Route path='/sourdough' element={<Sourdough />}/>
        </Routes>      
      {/* <Footer /> */}
    </Router>
  )
}

export default App
