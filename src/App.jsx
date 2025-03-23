
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'

function App() {
  
    function handleClick(){
      alert('I am clicked.')
    }

    const handleClick3 = () => {
      alert('clicked 3')
    }

    const handleAdd5 = (num)=>{
      const newNum = num+5;
      alert(newNum);
    }


  return (
    <>
      
      <h1>Vite + React</h1>
      
      <Batsman></Batsman>   <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick(){
        alert('clicked 2')
      }}>Click Me 2</button>

      <button onClick={handleClick3}>click me 3</button>
      
      <button onClick={() => alert(' clicked 4')}>click me 4</button>
      
      <button onClick={()=>handleAdd5(11) }>Click me 5</button>
      
    </>
  )
}

export default App
