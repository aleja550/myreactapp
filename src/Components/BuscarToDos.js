import React from 'react';

const BuscarToDos = ({ handleInputSearchToDos, handleEraserBtnToDos }) => (
    <div className="row">
                    <div className="col-md-10">
                        <input type="text" className="form-control" placeholder="Search User To Do's" 
                        onChange={handleInputSearchToDos}/>
                    </div>
                    <div className="lead text-center" >
                    <button className="btn-info" onClick={handleEraserBtnToDos}>
                    <i className="fas fa-eraser"></i>
                    </button>
                    </div>
                </div>
)

export default BuscarToDos;