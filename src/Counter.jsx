import { useState } from "react"

export default function Counter(){

  const [count, setCount] = useState(5);

  const handleAdd = () =>{
    const newCount = count + 5;
    setCount(newCount);
  }

  const counterStyle ={
    border: '2px solid yellow'
  }
  return(
    <div style={counterStyle}>
      <h3>Count : {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}