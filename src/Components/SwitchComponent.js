import React from 'react';

const SwitchComponent = ({ todo }) => (
   <div className="form-group">
    <div className="custom-control custom-switch">
      <input type="checkbox" className="custom-control-input" id={todo.id} checked={todo.completed ? true : false}
      ></input>
      <label className="custom-control-label" for="customSwitch1"></label>
    </div>
    </div>
)

export default SwitchComponent;

//id={`todo${todo.id}`}