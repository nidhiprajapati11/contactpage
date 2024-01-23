
import { Link } from "react-router-dom";
import imge from '../../../src/user1.png';
import { useEffect, useState } from "react";
import axios from 'axios';


const Contactlist = () => {

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        async function getAllcontacts() {
            try {
                const contacts = await axios.get("http://localhost:3031/contacts")
                //console.log(contacts.data);
                setContacts(contacts.data);

            } catch (error) {
                // console.log('rong')
            }
        }
        getAllcontacts();
    }, [])

    const handleDelete = async id => {
        await axios.delete(`http://localhost:3031/contacts/${id}`)
        var newcontact = contacts.filter((item) => {
            return item.id !== id;
        })
        setContacts(newcontact);
    }

    return (
        <>
            <section className="context-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">contact Manager
                                    <Link to={'/contact/add'} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle" /> New</Link>
                                </p>

                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perspiciatis,
                                    beatae distinctio culpa perferendis ut sed officiis suscipit corporis. Nam fugiat molestias quidem nostrum
                                    temporibus sapiente ut similique natus porro?</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="search Name" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="submit" className="btn btn-outline-dark" value='search' />
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        {
                            contacts.map((contact, i) => {
                                return (


                                    <div className="col-md-6" key={i}>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-md-4">
                                                        <img src={imge} alt="" className=" contact-img" />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-item-action">
                                                                Name: <span className="fw-bold">{contact.name}</span>
                                                            </li>
                                                            <li className="list-group-item list-group-item-action">
                                                                Mobile No: <span className="fw-bold">{contact.phone}</span>
                                                            </li>
                                                            <li className="list-group-item list-group-item-action">
                                                                Email: <span className="fw-bold">{contact.email}</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-md-1 align-items-center d-flex flex-column">
                                                        <Link to={`/contact/view/${contact.id}`} className="btn btn-warning ">
                                                            <i className="fa fa-eye" />
                                                        </Link>

                                                        <Link to={`/contact/edit/${contact.id}`} className="btn btn-primary my-1">
                                                            <i className="fa fa-pen" />
                                                        </Link>

                                                        <button onClick={() => handleDelete(contact.id)} className="btn btn-danger">
                                                            <i className="fa fa-trash" />
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactlist;