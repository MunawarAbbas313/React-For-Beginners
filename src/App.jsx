
import './App.css'
// react hooks are responsible for the updation of values of dom
import { useState } from 'react'

function App() {
  // usestate is alwyas stored in a array 
  // varible shloud not be constent if we are upadting value 
  // arrays 0th index carries a varible and 1st index a method 
  // method name can be of your choice 
  // no need of reference in mutliple  places if we are updating the value
   let [counter , setCounter] = useState(0);
  const addVale = ()=>{
  counter++;
  setCounter(counter)
  if(counter === 20)
  {
    setCounter(counter = 0);
  }
   }
const subValue = ()=>{
  counter--;
  setCounter(counter)
  if(counter < 0)
  {
    setCounter(counter = 0);
  }
 
}
  return (
    <>
       <div className="bdy">
       <h1 className="Heading" >Counter Using <span className='spano'>REACT JS</span></h1>
       <div className="counter">
        <span className="result"> Value : {counter}</span>
    
       </div>
       <div className="btn">
        <button className="left" onClick={addVale}> Increse
        </button>
        <button className="right" onClick={subValue}>Decrese</button>
       </div>

       </div>
    </>
  )
}

export default App
