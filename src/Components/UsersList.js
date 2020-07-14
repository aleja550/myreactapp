import React from 'react';
import User from './User';

const Users = ({users, handleUserDetailBtn}) => (
    <div>
        {users.map((usuario) => (
            <User
                key={usuario.id}
                usuario={usuario}
                handleUserDetailBtn = {handleUserDetailBtn}
            />
        ))}
    </div>
);

export default Users;