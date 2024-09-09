import { Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import CustomPage from './pages/CustomPage';
import P404 from './pages/404';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={ <AboutUs /> }/>
        <Route path='/services' element={ <Services/> }/>
        <Route path='/pricing' element={ <Pricing/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/CustomPage' element={ <CustomPage/> }/>
        <Route path='/404' element={ <P404/> }/>
      </Routes>
    </>
  )
}

export default App
