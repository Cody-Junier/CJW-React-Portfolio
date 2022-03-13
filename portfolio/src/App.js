import React, { useState } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import "./App.css"
function App() {
  const [currentCategory, setCurrentCategory] = useState("About");
  
  const pageSelect = () =>{
    // const contactTab = document.getElementById("contact")
    // const aboutTab = document.getElementById("about")
    // const projectTab = document.getElementById("projects")
    // projectTab.classList.remove("navActive")
    // contactTab.classList.remove("navActive")
    // aboutTab.classList.remove("navActive")
    // projectTab.classList.add("navInactive")
    // contactTab.classList.add("navInactive")
    // aboutTab.classList.add("navInactive")
    if(currentCategory === "Projects"){
      // projectTab.classList.remove("navInactive")
      // projectTab.classList.add("navActive")
      return <Projects></Projects>
    }
    if(currentCategory === "Contact"){
      // contactTab.classList.remove("navInactive")
      // contactTab.classList.add("navActive")
      return <Contact></Contact>
    } 
    if(currentCategory === "About"){
      // aboutTab.classList.remove("navInactive")
      // aboutTab.classList.add("navActive")
      return <About></About>
    }

    
  }
  return (
    <div>
      <Header
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        { pageSelect()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

