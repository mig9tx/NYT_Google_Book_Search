import React from 'react';

export default function Input(props) {
    return(
        <div className="form-group">
          <input className="form-control" {...props} />
          <button className="btn btn-success">Search</button>
        </div>
    );
}



