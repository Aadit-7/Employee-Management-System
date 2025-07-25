import { use, useContext, useEffect, useState } from "react";
import "./App.css";
//Use myFont 3,4,6
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  // console.log(authData);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //   }
  // }, [authData]);

  // New logic for permanent login even after refreshing the page

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      // console.log("Hai login ");
      const userData = JSON.parse(loggedInUser);
      // console.log(userData);

      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handelLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => email == e.email && password == e.password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employees = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employees) {
        setUser("employees");
        setLoggedInUserData(employees);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees" })
        );
      }
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
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </div>
  );
}

export default App;
