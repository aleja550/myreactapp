import React from 'react';
import SwitchComponent from './SwitchComponent';

const Todo = ({ todo, }) => (
    <div className="col-md-12 mb-4">
        <div className={todo.completed ? "card text-white bg-success mb-3" : "card text-white bg-secondary mb-3"}>
            <div className="card-header"> Title: {todo.title}
            <SwitchComponent todo={todo}
             />
                 </div>
            <div className="card-body">
                <p className="card-text">Id: {todo.id} </p>
                <p className="card-text">Done: {todo.completed ? <i className="far fa-check-circle btn-success"></i>
                    : <i className="far fa-window-close btn-danger"></i>} </p>
            </div>

        </div>
    </div>)

export default Todo;
    
