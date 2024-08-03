import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";


let UserList = () => {

    let [state, setState] = useState({
        users : []
    });

    useEffect(() => {
        // *********Promises Model (Old)**********
        // UserService.getAllusers().then((response) => {
        //     setState(() => ({
        //         users : response.data
        //     }));
        // }).catch((error) => {
        //     console.log(error);
        // });

        // ***********Async Await Model (New)*************
        const fetchData = async () => {
            let response = {};
            try {
                response = await UserService.getAllusers();
                setState(() => ({
                    users: response.data
                }));
            }
            catch (error) {
                console.log(error);
            }

            // Component will unmount
            return () => {
                response = null;
            };
        };
        fetchData();

    }, []);

    let {users} = state;

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
                        <table className="table table-hover text-center table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>SNO</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>STREET</th>
                                    <th>CITY</th>
                                    <th>WEBSITE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 &&
                                    users.map(user => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.address.street}</td>
                                                <td>{user.address.city}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default UserList;