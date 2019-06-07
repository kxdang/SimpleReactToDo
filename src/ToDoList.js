import React, { Component } from 'react'
import NewToDoForm from './NewToDoForm'
import Todo from './Todo'
import "./TodoList.css";


class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newToDo) {
        this.setState({
            todos: [...this.state.todos, newToDo]
        });
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(theTodo => theTodo.id !== id)
        });
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(theTodo => {
            if(theTodo.id === id) {
                return {...theTodo, task: updatedTask};
            }
            return theTodo;
        });
        this.setState({todos: updatedTodos})
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(theTodo => {
            if(theTodo.id === id) {
                return {...theTodo, completed: !theTodo.completed};
            }
            return theTodo;
        });
        this.setState({todos: updatedTodos})
    }
    
    render() {
        const todos = this.state.todos.map(theToDo => 
            { return <Todo 
                        key={theToDo.id} 
                        id={theToDo.id} 
                        task={theToDo.task}
                        completed={theToDo.completed} 
                        removeToDo={this.remove}
                        updateToDo={this.update}
                        toggleToDo={this.toggleCompletion}
                        />;
        });

        return (
            <div className="TodoList">
                <h1>Todo List
                    <span>A Simple React Todo List App</span>
                </h1>
                <ul>{todos}</ul>
                <NewToDoForm createToDo={this.create}/>
            </div>
        )
    }


}

export default ToDoList;