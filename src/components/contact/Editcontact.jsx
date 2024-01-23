import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import imge from '../../../src/user1.png';
import axios from "axios";




const Editcontact = () => {

    let navigate = useNavigate();
    const { Id } = useParams();   //console.log(Id);

    const [user, setUser] = useState({
        name: "",
        photo: "",
        email: "",
        phone: "",
        company: "",
        title: ""
    });

    const { name, photo, email, phone, company, title } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3031/contacts/${Id}`, user);
        navigate("/");
        //console.log(Id);
    }


    useEffect(() => {
        const loadUser = async () => {
            const result = await axios.get(`http://localhost:3031/contacts/${Id}`);
            setUser(result.data)
            //console.log(Id);
            // console.log(result.data);
        }
        loadUser();
    }, [Id]);



    return (
        <>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary fw-bold">Edit contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde earum eaque commodi
                                iste aut nemo voluptates nihil dolorem deserunt inventore ipsum at est qui tempore aliquid sapiente, quam tempora.</p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form onSubmit={e => onSubmit(e)}>
                                <input type="text" className="form-control mb-2" placeholder="Enter Your name " name="name" value={name} onChange={e => onInputChange(e)} />
                                <input type="photo" className="form-control mb-2" placeholder="photo url" name="email" value={photo} onChange={e => onInputChange(e)} />
                                <input type="email" className="form-control mb-2" placeholder="Enter Your E-mail " name="email" value={email} onChange={e => onInputChange(e)} />
                                <input type="number" className="form-control mb-2" placeholder="phone" name="phone" value={phone} onChange={e => onInputChange(e)} />
                                <input type="text" className="form-control mb-2" placeholder="company" name="company" value={company} onChange={e => onInputChange(e)} />
                                <input type="text" className="form-control mb-2" placeholder="title" name="title" value={title} onChange={e => onInputChange(e)} />
                                <select className="form-control">
                                    <option value=''>select a group</option>
                                </select>
                                <input type="submit" className="btn btn-primary mt-2" value='update' />
                                <Link to={'/contact/list'} className="btn btn-dark ms-2 mt-2">Cancel</Link>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={imge} alt="" className="contact-img" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Editcontact;