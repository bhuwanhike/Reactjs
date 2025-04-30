import { useState } from "react";

import Login from "./components/Auth/Login";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "at@.com" && password == "123") {
      let admin = "admin";
      setUser(admin);
      console.log(user);
    } else if (email == "user@.com" && password == "123") {
      setUser("user");
      console.log(user);
    } else {
      alert("Invalid");
    }
  };

  return <>{!user ? <Login handleLogin={handleLogin} /> : ""}</>;
}

export default App;
