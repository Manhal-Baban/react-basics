import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: "John Doe",
        title: "Developer",
        salary: "$2500",
        phone: "123-456-7890",
        email: "johndoe@yahoo.com",
        animal: "Tiger",
      },
    ]);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <button onClick={handleClick}>Add Employee</button>
        {employees.map((employee) => {
          console.log(employee);

          return (
            <Card
              key={employee.id}
              name={employee.name}
              title={employee.title}
              salary={employee.salary}
              phone={employee.phone}
              email={employee.email}
              animal={employee.animal}
            />
          );
        })}

        <Counter count={count} setCount={setCount} />
      </main>
      <Footer count={count} setCount={setCount} />
    </div>
  );
}

export default App;
