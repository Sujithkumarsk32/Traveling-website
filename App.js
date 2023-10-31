import React from 'react';
import Header from "./Components/Navbar";
import Image from "./Components/Image";
import Services from "./Components/Services";
import Recommend from "./Components/Recommend";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

 function App(){
  return( <div className="App">
    <Router>
    <Header />
        
        <Routes>
        <Route path='Image' element={<Image />}/>
          <Route path='Services' element={ <Services />}/>
          <Route path='Recommend' element={ <Recommend />}/>
          <Route path='Testimonials' element={<Testimonials/>}/>
          
          <Route path='Footer' element={<Footer/>}/>
        </Routes>
        </Router>
        
        <Image />
        <Services />
        <Recommend />
        <Testimonials/>
        <Footer/>
        

  </div>
  );
}

export default App;

