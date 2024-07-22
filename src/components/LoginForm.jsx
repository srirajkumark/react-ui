import React, { useState } from "react";


let LoginForm = () => {

    let [state, setState] = useState({
        user : {
            username : '',
            password : ''
        }
    });

    let {user} = state;

    let ChangeUserName = (event) => {
        setState((state) => ({
            user : {
                ...state.user,
                username: event.target.value
            }
        }));
    };

    let ChangePassword = (event) => {
        setState((state) => ({
            user : {
                ...state.user,
                password: event.target.value
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
                                            value={user.username}
                                            onChange={ChangeUserName}
                                            type="text" className="form-control" placeholder="User Name"/>
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            value={user.password}
                                            onChange={ChangePassword}
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