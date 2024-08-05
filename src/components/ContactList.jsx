import React, { useEffect, useState } from "react";
import ContactService from "../services/ContactService";


let ContactList = (props) => {

    let [state, setState] = useState({
        contacts : []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await ContactService.getContactList();
                setState(() => ({
                    contacts: response.data
                }));
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();

    }, []);

    let {contacts} = state;

    let clickContact = (contact) => {
        props.sendContact(contact); //send data to parent
    };

    return(
        <React.Fragment>
            <table className="table table-hover text-center table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>SNO</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.length > 0 && contacts.map(contact => {
                            return (
                                <tr key={contact.login.uuid} onClick={() => clickContact(contact)} >
                                    <td>{contact.login.uuid.substring(contact.login.uuid.length - 5)}</td>
                                    <td>{contact.name.first} {contact.name.last}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.location.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
};

export default ContactList;