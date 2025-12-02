import axios from "axios";
import { useEffect, useState } from "react";
import "../../src/App.css";
import Card from "../components/Card";
import Counter from "../components/Counter";
import Form from "../components/Form";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EmployeesTable from "./EmployeesTable";

function Home() {
  // const { count, setCount } = useCounter();
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    age: "",
    name: "",
    title: "",
  });
  const [loading, setLoading] = useState(true);
  console.log("Component Rendered");

  useEffect(() => {
    // Common error when handling loading state:
    // setLoading(true); // This is an error
    axios
      .get("https://react-basics-oa4p.onrender.com/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://react-basics-oa4p.onrender.com/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter((employee) => employee.id !== id));
      });
  };

  const handleClick = () => {
    axios
      .post("https://react-basics-oa4p.onrender.com/employees", {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <Button
        variant="contained"
        color="secondary"
        sx={{ padding: "20px" }}
        startIcon={<DeleteIcon />}
      >
        Click Me I'm From MUI!
      </Button>
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
        <EmployeesTable />
      </main>
    </div>
  );
}

export default Home;
