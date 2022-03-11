import React, { useState } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
  const [currentCategory, setCurrentCategory] = useState("About");
  
  const pageSelect = () =>{
    if(currentCategory === "Projects"){
      return <Projects ></Projects>
    }
    if(currentCategory === "Contact"){
      return <Contact></Contact>
    } 
    if(currentCategory === "About"){
      return <About></About>
    }
    if(currentCategory === "Resume"){
      return<Resume></Resume>
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

