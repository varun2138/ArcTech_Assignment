# ArcTech Assignment Submission

## **Introduction**

This repository contains my solutions for the Assignment given by ArchTech for Web Development Internship.

### **The Assignment includes**:

-Fetching data using 'async/await'.
-Displaying the data in a **MUI Table**.
-Integrating **Redux**.
-Writing a **mindmap prompt**.

---

## **1) Async/Await Function to fetch Data**

JavaScript is a **single-threaded, dynamically typed scripting language**, meaning it executes one operation at a time in a sequence, without disturbing the flow of execution, it supports **asynchronous operations** without effecting blocking the **I/O operations**.

Async/await is used to perform asynchronous operations synchronously within a function.This makes the code readable and prevents blocking other I/O operations while waiting for the response.

### **Code snippet:**

The following function fetches data from JSONPlaceholder API using `async/await`

```javascript
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  } catch (error) {
    console.error("Error while fetching data", error);
  }
};
fetchData();
```

## **2) Displaying Data in an MUI Table**

## **We use Material UI to display the data in a responsive table**.

## **Code snippet:**

```javascript
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
```

## **3) Passing Redux Store to a React Page**

## **Integrating Redux with React:**

## Redux is a **state management library** used in react, it centralizes application state in a **single store** , making it accessible across components . Actions are **dispatched** to modify the state, and **reducers** define how the state changes the responses. It is mostly used in complex react applications.

```javascript
import { createStore } from "redux";
import { Provider } from "react-redux";

const reducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT_VALUE":
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <h1>Redux Integration with React</h1>
    </Provider>
  );
};

export default App;
```

## **3) Prompt to display MUI Table in React**

## \*\*MindMap prompt for displaying a table in react

1. React App Setup
   --> Initialize a new react application using vite .
   --> Install Material UI for using table components.

2. Fetching the Data.
   --> Use Async/Await to fetch data from the
   JSONPlaceholder API
   --> handle Error properly , if fetching the data fails.

3. Displaying Table
   --> Use Material UI's table components to structure the
   table.

4. Responsiveness
   -->use MUI's **sx** property for responsive desing for
   displaying the table according to the width.

5. Storing the data and rendering it
   --> Store the response in a state, and render the data
   using map method and display them in the table.
