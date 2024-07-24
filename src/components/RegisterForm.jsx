import React from "react";


let RegisterForm = () => {
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <p className="h4">Register Here</p>
                            </div>
                            <div className="card-body bg-light">
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="User Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-control">
                                            <option value="">Select Designation</option>
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                            <option value="Tech Lead">Tech Lead</option>
                                            <option value="Project Manager">Project Manager</option>
                                            <option value="Director">Director</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <textarea rows={4} className="form-control" placeholder="Bio"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <input type="checkbox" className="form-check-input"/> Accept Terms
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className="btn btn-warning btn-sm" value="Register" />
                                    </div>
                                    {/*Register Form with Details */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default RegisterForm;