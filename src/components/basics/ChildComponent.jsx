import React from "react";


let ChildComponent = (props) => {
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card shadow-lg">
                            <div className="card-body bg-warning text-dark">
                                <p className="h4">Child Component</p>
                                <p>{props.channel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ChildComponent;