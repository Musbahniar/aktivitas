import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 

class App extends Component {
  constructor () {
    super();
    this.state = { todos: []} ;
  }

  addTodo = (e) => {
    e.preventDefault();

    let jam = this.refs.jam.value;
    let aktivitas = this.refs.aktivitas.value;

    this.state.todos.push({jam, aktivitas});
    this.setState ({todos: this.state.todos});

    this.refs.formulir.reset();
    this.refs.jam.focus();

  }
    removeTodo = (i) => {
      this.state.todos.splice(i,1);
      this.setState({ todos: this.state.todos });
  
      this.refs.formulir.reset();
      this.refs.jam.focus();
    }

  render() {
    return (
      <div className="App">
        <Header />
        <form ref="formulir" className="form-inline">
            <input type="text" className="form-control" size="8" ref="jam" placeholder="Jam aktivitas" />
            <input type="text" className="form-control" size="30" ref="aktivitas" placeholder="Jenis aktivitas" /> 
            <button onClick={this.addTodo} className="btn btn-info">Simpan</button>
        </form>
        <hr />
        <div>
          <ul>
            <TransitionGroup>
              { this.state.todos.map((data, i) =>
              <CSSTransition
                key={i}
                timeout={500}
                classNames="move" >

                  <li key={i}>
                    <div className="todo-wrapper">
                    <button onClick={ () => this.removeTodo(i)} className="btn btn-outline-danger"> Hapus </button> { data.jam } : { data.aktivitas }
                    </div>
                  </li>
              </CSSTransition>
              )}
            </TransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
