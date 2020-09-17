import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    {name: "JT", message: "I am the GOAT"},
    {name: "JDrippy", message: "I be deep in my bag"},
    {name: "JVenture", message: "I will go anywhere"}
  ]);
  
  return (
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;