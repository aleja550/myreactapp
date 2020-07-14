import React from 'react';
import UserDetails from './UserDetails';
import TodosList from './TodosList';
import BuscarToDos from './BuscarToDos';
import DropDownCompleted from './DropDownCompleted';

const RightSidePanel = ({usuario, todos, handleInputSearchToDos, handleEraserBtnToDos, handleDropDownList}) => (
    <div>
        <UserDetails
        usuario={usuario}
        />
        <BuscarToDos handleInputSearchToDos={handleInputSearchToDos} handleEraserBtnToDos={handleEraserBtnToDos}/>
        <br></br>
        <DropDownCompleted handleDropDownList={handleDropDownList}
        />
        <br></br>
        <TodosList
        todos={todos}
        />
    </div>
)

export default RightSidePanel;