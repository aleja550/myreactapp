import React from 'react';

  const UserDetails = ({usuario}) => (
    <div className="col-md-12 mb-4">  
        <br></br>
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header">{usuario.name} {usuario.id} </div>        
            <span className="lead text-center"><i className="fas fa-user fa-5x"></i></span>
            <div className="card-body">
                <p className="card-text">Username: {usuario.username} </p>
                <p className="card-text">Email: {usuario.email} </p> 
                <p className="card-text">Phone: {usuario.phone} </p> 
                <p className="card-text">Website: {usuario.website} </p> 
            </div>          
        </div>
    </div>)
    

export default UserDetails;