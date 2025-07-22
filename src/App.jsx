import { useContext, useEffect, useState } from "react";
import "./App.css";
//Use myFont 3,4,6
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext); // ✅ Moved up

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser"); // ✅ Fixed missing 'const'
      // No additional logic added as per your instruction
    }
  }, [authData]);

  const handelLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => email == e.email && password == e.password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.employees.find((e) => email == e.email && password == e.password)
    ) {
      setUser("employees"); // ✅ Fixed typo: was "emplyees"
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employees" })
      );
    } else {
      alert("Invalid Cradentials");
    }
  };

  return (
    <div>
      {!user ? <Login handelLogin={handelLogin} /> : null}
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employees" ? (
        <EmployeeDashboard />
      ) : null}
      {/* ✅ Fixed render logic */}
    </div>
  );
}

export default App;
