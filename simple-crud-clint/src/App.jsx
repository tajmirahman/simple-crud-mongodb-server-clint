
import './App.css'



function App() {

  const handleAddUser=(event)=>{
    event.preventDefault();
    const from=event.target;
    const name=from.name.value;
    const email=from.email.value;
    const user={name,email}
    console.log(user);

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }

  return (
    <>
      
      <h1>simple crud </h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="text" name="email" id="" />
        <br />
        <input type="submit" value="add User" />
      </form>
      
    </>
  )
}

export default App
