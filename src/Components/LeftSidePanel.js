import React from 'react';
import Buscador from './Buscador';
import Users from './UsersList';

const LeftSidePanel = ({ users, handleInputSearch, handleEraserBtn, handleUserDetailBtn }) => (

    <div>
        <p className="lead text-center"> Search User</p>
        <Buscador handleInputSearch={handleInputSearch} handleEraserBtn={handleEraserBtn} />
        <br></br>
        <Users
            users={users}
            handleUserDetailBtn={handleUserDetailBtn}
        />
    </div>
)

export default LeftSidePanel;