import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home'
import Header from './components/Header';
import Catering from './components/Catering/Catering';
import PastEvents from './components/Catering/PastEvents';
import MonthlySpecials from './components/MonthlySpecials';
import Bakery from './components/Bakery/Bakery';
import Sourdough from './components/Sourdough';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound'
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      {/* <Header /> */}
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/catering' element={<Catering />} />
          <Route path='/catering/past_events' element={<PastEvents />} />
          <Route path='/monthly_specials' element={<MonthlySpecials />} />
          <Route path='/bakery' element={<Bakery />}/>
          <Route path='/bakery/sourdough' element={<Sourdough />}/>
          <Route path='/contact_us' element={<ContactUs />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>      
      <Footer />
    </Router>
  )
}

export default App
