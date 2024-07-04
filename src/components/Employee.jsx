import React from "react";

class Employee extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            employees : [
                {
                    name : 'John',
                    age : 35
                },
                {
                    name : 'Wilson',
                    age : 25
                }
            ] 
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <span>NAME : {this.state.employees[0].name}</span><br/>
                        <span>AGE : {this.state.employees[0].age}</span><br/>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <span>NAME : {this.state.employees[1].name}</span><br/>
                        <span>AGE : {this.state.employees[1].age}</span><br/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Employee;