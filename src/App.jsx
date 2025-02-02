import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
const App = () => {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };
  console.log(todos[0].completed);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: { xs: "100%", md: "100%" },
        margin: "auto",
        marginTop: 2,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.slice(0, 50).map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.userId}</TableCell>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed ? "✅" : "❌"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default App;
