import React, { useState } from "react";


let Counter = () => {

    let [state, setState] = useState({
        count : 7
    });

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">Counter</p>
                            </div>
                            <div className="card-body">
                                <h5 className="display-3">{state.count}</h5>
                                <button className="btn btn-success btn-sm">Increment</button>
                                <button className="btn btn-warning btn-sm">Decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Counter;