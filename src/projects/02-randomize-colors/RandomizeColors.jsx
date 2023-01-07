import React from 'react'
import Title from '../components/Title'

export default function RandomizeColors() {

  function handleClick(event) {
    console.log(event);
  }

  const handleSecondClick = (event) => {
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    event.target.style.backgroundColor = getRandomColor();
  }

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="container m-auto text-center">
      <Title text={"Randomize Color"} classes={"mb-4"}/>
      <button className = "btn btn-danger" onClick={handleClick}>Click Me</button>
      <button className = "btn btn-success" onClick = {handleSecondClick}>Click Me</button>
      <button className = "btn btn-primary">Click Me</button>
      <button className = "btn btn-warning">Click Me</button>
    </div>
  )
}
