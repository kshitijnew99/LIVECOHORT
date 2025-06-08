import { useState } from "react"

const App = () => {


  const [name,setname] = useState("kshitij");


  const changeName = () => {
    setname("piyush");
  }
  console.log(name);
  
  
  return (<>
            <h1>UserName</h1>
            <h3>{name}</h3>
            
            

            <button onClick={changeName}>Change</button>
         </>)
} 
export default App
