import React from "react";
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portifolio from "./components/portifolio/Portifolio";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";


const App = () =>{
  return(
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portifolio />
      <Pricing />
      <Testimonials />
      <Blogs />
      <Contact />
    </main>
    </>
  )
}

export default App;
