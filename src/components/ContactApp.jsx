import React from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";


let ContactApp = () => {
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Contact App</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ad eos ipsum, ipsam ex porro nihil voluptates quas laudantium tenetur enim impedit nesciunt pariatur eum, temporibus facere alias. Aliquam, sint.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-9">
                        <ContactList/>
                    </div>
                    <div className="col-md-3">
                        <ContactCard/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ContactApp;