import { useState } from 'react'
import './App.css'
import UsersPage from './views/UsersPage';


function App() {

  const [greeting, setGreeting] = useState<string>("");

  const getGreeting = async () => {
    const response = await fetch("api/users");
    const greeeting = await response.text();
    console.log(greeeting);
    setGreeting(greeeting);
  };

  return (
    <div>
      <h1>Greetring</h1>
      <button onClick={getGreeting}>Get greeting</button>
      <p>{greeting}</p>
      <UsersPage />
    </div>
  )
}

export default App
