import React from "react";
import { Button } from "react-bootstrap";
import "./piano.css";

export const PianoChild = () => {

  const handleaudioPlay = (set) => {
    const audio = new Audio(`MP3/${set}.mp3`);
    audio.play();
    };

    document.addEventListener("keydown", (e) =>{
      if (e.key === "a" && handleaudioPlay('A'));
      if (e.key === "s" && handleaudioPlay('B'));
      if (e.key === "d" && handleaudioPlay('C'));
      if (e.key === "f" && handleaudioPlay('D'));
      if (e.key === "j" && handleaudioPlay('E'));
      if (e.key === "k" && handleaudioPlay('F'));
      if (e.key === "l" && handleaudioPlay('G'));
      e.stopPropagation();
    });

    return(
    <div id='pianodiv'>
       
      <Button className='A' id='piano'onMouseDown={()=>handleaudioPlay("A")}>SA</Button>  
      <Button className='B' id='piano'onMouseDown={()=>handleaudioPlay("B")}>RE</Button>  
      <Button className='C' id='piano'onMouseDown={()=>handleaudioPlay("D")}>GA</Button>  
      <Button className='D' id='piano'onMouseDown={()=>handleaudioPlay("E")}>MA</Button>  
      <Button className='E' id='piano'onMouseDown={()=>handleaudioPlay("F")}>PA</Button>  
      <Button className='F' id='piano'onMouseDown={()=>handleaudioPlay("G")}>DHA</Button> 
      <Button className='G' id='piano'onMouseDown={()=>handleaudioPlay("Gb")}>NI</Button>  

    </div>
  );
}