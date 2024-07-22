import React, { useState } from "react";


let LoginForm = () => {

    let [state, setState] = useState({
        user : {
            username : '',
            password : ''
        }
    });

    let {user} = state;

    let ChangeInput = (event) => {
        setState((state) => ({
            user : {
                ...state.user,
                [event.target.name]: event.target.value
            }
        }));
    };

    let SubmitLogin = (event) => {
        event.preventDefault();
        console.log(user);
    };


    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(state)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <p className="h4">Login Here</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={SubmitLogin}>
                                    <div className="mb-3">
                                        <input
                                            name="username" 
                                            value={user.username}
                                            onChange={ChangeInput}
                                            type="text" className="form-control" placeholder="User Name"/>
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            name="password"
                                            value={user.password}
                                            onChange={ChangeInput}
                                            type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className="btn btn-success btn-sm" value="Login"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default LoginForm;