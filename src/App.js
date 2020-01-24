import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/layout/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/pages/About";
import "./App.css";
// import uuid from "uuid";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(resp =>
        setTodos([
          ...resp.data.map(d => {
            if (d.completed) {
              d.completed = !d.completed;
            }
            return d;
          })
        ])
      );
    // .then(resp => this.setState({ todos: [...resp.data] }))
  }, []);

  const markComplete = id => {
    setTodos([
      ...todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    ]);
  };
  const deleteItem = id => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      setTodos([
        ...todos.filter(todo => {
          return todo.id !== id;
        })
      ])
    );
  };
  const addTodo = title => {
    // const counter = this.state.todos.length;
    // const newTodo = { id: uuid.v4(), title, completed: false };
    axios
      .post("http://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => setTodos([...todos, res.data]));
  };
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          <Route
            exact
            path='/'
            render={props => (
              <Fragment>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={todos}
                  markComplete={markComplete}
                  deleteItem={deleteItem}
                />
              </Fragment>
            )}
          />
          <Route path='/about' component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
