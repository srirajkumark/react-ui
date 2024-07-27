import React, { useState } from "react";
import ChildComponent from "./ChildComponent";


let ParentComponent = () => {

    let [state, setState] = useState({
        channel : 'Sri Raj Tech'
    });

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card shadow-lg">
                            <div className="card-body bg-success text-white">
                                <p className="h4">Parent Component</p>
                                <ChildComponent channel={state.channel}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ParentComponent;