import React, { useState } from "react";


let UserList = () => {

    let [state, setState] = useState({
        users : []
    });

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">User List</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet libero voluptate exercitationem, necessitatibus, nobis vero tempore cumque itaque ullam quae reprehenderit sint pariatur facere quasi nulla repellat ex ducimus?</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Welcome to UserList</h2>
                        <pre>{JSON.stringify(state.users)}</pre>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default UserList;