import React from 'react';
import Todo from './Todo';

const Todos = ({todos}) => (
    <div>
        {todos.map((todo) => (
            <Todo
                key={todo.id}
                todo={todo}
            />
        ))}
    </div>
);

export default Todos;