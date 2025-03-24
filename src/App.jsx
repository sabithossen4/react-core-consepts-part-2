
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './users'
import Friends from './Friends'
import Posts from './Posts'
import Players from '../Players'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

const fetchFriends =async() =>{
  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
} 

const fetchPosts =async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}


function App() {

  // const friendsPromise = fetchFriends();
  // const postsPromise = fetchPosts();
  
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

      <Players></Players>

      {/* <Suspense fallback={<h4>Posts are comming......... </h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}
      
        {/* <Suspense fallback ={<h3>Friends are comming for treat..</h3>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense> */}
      

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}> </Users>
      </Suspense> */}
      
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
