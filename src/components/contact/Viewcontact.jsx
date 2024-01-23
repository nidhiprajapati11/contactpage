import React from "react";
import { Link } from "react-router-dom";
import imge from '../../../src/user1.png';

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Viewcontact = () => {
    const { Id } = useParams();
    const [Contact, setContact] = useState([]);

    useEffect(() => {
        async function getContact() {
            try {
                const Contact = await axios.get(`http://localhost:3031/contacts/${Id}`)
                //console.log(Contact.data);
                // console.log(Id);
                setContact(Contact.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getContact();
    }, [Id])

    return (
        <>
            <section className="view-contact-page p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">view contact</p>
                            <p className="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde delectus corporis quam repudiandae sequi. Eveniet aliquid a minus, culpa et, ipsa nostrum, sapiente placeat tempora officiis iusto deserunt animi iste!</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={imge} alt="" className="contact-img" />
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    Name: <span className="fw-bold">{Contact.name}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Mobile No: <span className="fw-bold">{Contact.phone}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Email: <span className="fw-bold">{Contact.email}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    company: <span className="fw-bold">{Contact.company}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    title: <span className="fw-bold">{Contact.title}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    group: <span className="fw-bold">{Contact.group}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contact/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Viewcontact;