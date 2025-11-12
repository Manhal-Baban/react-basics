import axios from "axios";
import { useEffect, useState } from "react";
import "../../src/App.css";
import Card from "../components/Card";
import Counter from "../components/Counter";
import Form from "../components/Form";

function Home() {
  // const { count, setCount } = useCounter();
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    age: "",
    name: "",
    title: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/employees/${id}`).then(() => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };

  const handleClick = () => {
    axios
      .post("http://localhost:3001/employees", {
        id: String(employees.length + 1),
        name: formData.name,
        title: formData.title,
        age: formData.age,
        isFavourite: false,
      })
      .then((response) => {
        setEmployees([...employees, response.data]);
      });
  };

  const toggleFavourite = (id) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id && employee.isFavourite === undefined) {
        return { ...employee, isFavourite: false };
      } else if (employee.id === id) {
        return { ...employee, isFavourite: !employee.isFavourite };
      } else {
        return employee;
      }
    });
    setEmployees(updatedEmployees);
  };

  return (
    <div className="app">
      <main className="main-content">
        {employees.map((employee) => {
          console.log(employee);

          return (
            <Card
              key={employee.id}
              {...employee}
              toggleFavourite={toggleFavourite}
              handleDelete={handleDelete}
            />
          );
        })}
        <Counter count={count} setCount={setCount} />
        <Form
          formData={formData}
          setFormData={setFormData}
          handleClick={handleClick}
        />
      </main>
    </div>
  );
}

export default Home;
