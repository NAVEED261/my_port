import { Component } from "react";

import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Projects from "./component/project"
import About from "./component/about";
import Skills from "./component/skill"

export default function Home() {
  return (
    
      <div id="Home" >
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        
        
        
        
        
        
      </div>
    
  );
}
