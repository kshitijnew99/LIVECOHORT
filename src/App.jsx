const App = () => {

  let click = () => {
    alert('click toh kar diya')
  }

  const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 22 }
  ];

  const updatefPeo = people.map(function(peo,idx){
    return <li key={idx}>
      <span>Name : {peo.name}</span> |
      <small> Age : {peo.age}</small>
    </li>
  })
  
  // console.log(updatefPeo); 
  


  return (<>
            <h1>JSON data rendering</h1>
            <ol>
              {updatefPeo}
            </ol>

         </>)
} 
export default App
