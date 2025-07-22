import { useState } from "react";
import "./App.css";
//Use myFont 3,4,6
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  const [user, setUser] = useState(null);

  const handelLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log(user);
    } else if (email == "user@me.com" && password == "123") {
      setUser("emplyee");
      console.log(user);
    } else {
      alert("Invalid Cradentials");
    }
  };

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;
