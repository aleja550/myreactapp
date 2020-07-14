import React from 'react';

const Buscador = ({ handleInputSearch, handleEraserBtn }) => (
    <div className="row">
                    <div className="col-md-10">
                        <input type="text" className="form-control" placeholder="Search users...     Ex: Leanne Graham" 
                        onChange={handleInputSearch}/>
                    </div>
                    <div className="lead text-center" >
                    <button className="btn-info" onClick={handleEraserBtn}>
                    <i className="fas fa-eraser"></i>
                    </button>
                    </div>
                </div>
)

export default Buscador;