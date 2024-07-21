import React, { useState } from "react";


let UserName = () => {

    let [state, setState] = useState({
        username : 'Sri Raj'
    });

    let updateInput = (event) => {
        setState(() => ({
            username : event.target.value
        }));
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">User Name</p>
                            </div>
                            <div className="card-body bg-light">
                                <form>
                                    <div className="mb-3">
                                        <input 
                                            value={state.username}
                                            onChange={updateInput}
                                            type="text" className="form-control"/>
                                    </div>
                                    <h3>{state.username}</h3>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default UserName;