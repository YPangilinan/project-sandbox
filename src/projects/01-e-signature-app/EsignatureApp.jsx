import React, {useState} from 'react'
import Title from '../components/Title'

export default function EsignatureApp() {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("")

  const handleNameChange = (e) => {
    // console.log(e.target.value)
    setName(e.target.value);
  }

  const handleDateChange = (e) => {
    // console.log(e.target.value)
    setDate(e.target.value);
  }

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  }

  document.body.style.background = "#eee";
  return (
    <div className='container text-center'>
      <Title classes={"title"} text={name}/>
      <Title classes={"main-title"} text={!date ? "DoB" : date}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum impedit cupiditate facilis. Maiores ratione quos voluptas perferendis obcaecati nemo quod sunt corrupti, quis assumenda consectetur incidunt soluta atque explicabo laboriosam accusamus repellat pariatur laborum esse. Soluta eligendi, explicabo laudantium modi sit fugiat unde repudiandae in blanditiis, doloribus eveniet dolorem consequatur quasi a reiciendis aperiam reprehenderit culpa perferendis. Molestias atque adipisci quas fugit quam magni illo quidem iure, nam hic soluta illum laboriosam nemo voluptates distinctio labore voluptatibus saepe dolorum harum blanditiis. Qui deleniti odio enim possimus facilis cumque blanditiis, atque molestiae nihil, architecto modi? Veritatis at voluptate libero sapiente!</p>
    <footer className="d-flex" style={{justifyContent: "space-around", poisiton: "relative",top: "60vh"}}>
      <input type="date" value={date} style ={inputStyle} onChange={handleDateChange}/>
      <input type="text" value={name} style ={inputStyle} onChange={handleNameChange}/>
    </footer>
    </div>
  )
}
