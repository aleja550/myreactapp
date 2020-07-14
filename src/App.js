import React, { Component } from 'react';
import LeftSidePanel from './Components/LeftSidePanel';
import RigthSidePanel from './Components/RightSidePanel'

class App extends Component {

  state = {
    users: [],
    user: {},
    todos: [],
    completed: null,
  }

  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/users`)  // will make a GET request to the endpoint 
      .then(respuesta => respuesta.json())  // parses the output to JSON, 
      .then((data) => {
        this.setState({ users: data }) // sets the value of our state to the output from the API call and finally
      })
      .catch(console.log) // logs any error we get to the console.
  }

  requestUserTodos = userId => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)  // will make a GET request to the endpoint 
      .then(respuesta => respuesta.json())  // parses the output to JSON, 
      .then((data) => {
        this.setState({ todos: data }) // sets the value of our state to the output from the API call and finally
      })
      .catch(console.log) // logs any error we get to the console.
  }

  handleInputSearch = evento => {
    evento.preventDefault();
    let filteredUserList = this.state.users.filter(u => u.name.includes(evento.target.value) || u.email.includes(evento.target.value));
    this.setState({ users: filteredUserList });
  }

  handleEraserBtn = evento => {
    evento.preventDefault();
  
  }

  handleUserDetailBtn = usuario => {
    this.setState({ user: usuario });
    this.requestUserTodos(usuario.id);
  }

  handleInputSearchToDos = evento => {
    evento.preventDefault();
    let filteredToDoList = this.state.todos.filter(t => t.title.includes(evento.target.value));
    this.setState({ todos: filteredToDoList });
  }

  handleEraserBtnToDos = evento => {
    evento.preventDefault();
  }

  handleDropDownList = evento => {
    evento.preventDefault();
    let completed = evento.target.value;

    if (completed === 'all') {
      this.setState({ completed: null });
      return;
    }

    completed = completed === 'true' ? true : false;

    this.setState({ completed: completed }); 
      //, () => console.log(this.state));
  }

  filtrarEstadoTodos = (estado, todos) => {
    if (estado === null)
      return todos;

    return todos.filter(t => t.completed === estado);
  }

  render() {
    return (
      <div className="bs-docs-section">
        <div className="row">
          <div className="col-lg-3">
            <div className="bs-component">
              <div className="jumbotron col-12">
                <LeftSidePanel
                  users={this.state.users}
                  handleInputSearch={this.handleInputSearch}
                  handleEraserBtn={this.handleEraserBtn}
                  handleUserDetailBtn={this.handleUserDetailBtn}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <RigthSidePanel
              usuario={this.state.user}
              todos={this.filtrarEstadoTodos(this.state.completed, this.state.todos)}
              handleInputSearchToDos={this.handleInputSearchToDos}
              handleEraserBtnToDos={this.handleEraserBtnToDos}
              handleDropDownList={this.handleDropDownList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// $.getJSON(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`
