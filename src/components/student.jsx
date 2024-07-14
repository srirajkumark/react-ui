import React, { useState } from "react";


let Student = () => {
    let [state, setState] = useState({
        students : [
            {
                name : 'John',
                course : 'B.Tech'
            },
            {
                name : 'Laura',
                course : 'MBBS'
            }
        ]
    });

    let {students} = state; //Destructuring Concept in ES6

    return(
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <pre>{JSON.stringify(state)}</pre>
                    <span>Name : {state.students[0].name}</span><br/>
                    <span>Course : {state.students[0].course}</span>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <pre>{JSON.stringify(state)}</pre>
                    <span>Name : {students[1].name}</span><br/>
                    <span>Course : {students[1].course}</span>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Student;