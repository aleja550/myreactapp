import React from 'react';

const DropDownComplete = ({ handleDropDownList }) => (
        <div className="col-md-3">
            <div className="form-group">
                <select className="form-control" onChange={handleDropDownList}>
                    <option value='all'>All</option>
                    <option value='true'>Completed</option>
                    <option value='false'>Incompleted</option>
                </select>
            </div>
        </div>
)

export default DropDownComplete;

