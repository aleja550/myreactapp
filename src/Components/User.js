import React from 'react';

const User = ({usuario, handleUserDetailBtn}) => (
<div className="col-md-12 mb-4">  
    <div className="card text-white bg-danger mb-3">
        <div className="card-header">{usuario.name} {usuario.id} </div>        
        <span className="lead text-center"><i className="fas fa-user fa-5x"></i></span>
        <div className="card-body">
            <p className="card-text">Username: {usuario.username} </p>
            <p className="card-text">Email: {usuario.email} </p>
            <button className="btn-info" onClick={() => handleUserDetailBtn(usuario)} >
            <i className="fas fa-info-circle"></i>
            </button>    
        </div>          
    </div>
</div>)


export default User;

// col-12 col-sm-6  