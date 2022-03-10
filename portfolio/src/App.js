import React, { useState } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
    </div>
  );
}

export default App;

