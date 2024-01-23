import React, { useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Addcontact = () => {
  let navigate = useNavigate();
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

  const onFormSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3031/contacts", user);
    navigate("/");
  };
  return (
    <>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-success fw-bold">create contact</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde earum eaque commodi
                iste aut nemo voluptates nihil dolorem deserunt inventore ipsum at est qui tempore aliquid sapiente, quam tempora.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <form onSubmit={e => onFormSubmit(e)}>
                <input type="text" className="form-control mb-2" placeholder="Enter Your name " name="name" value={name} onChange={e => onInputChange(e)} />
                <input type="photo" className="form-control mb-2" placeholder="photo url" name="photo" value={photo} onChange={e => onInputChange(e)} />
                <input type="email" className="form-control mb-2" placeholder="Enter Your E-mail " name="email" value={email} onChange={e => onInputChange(e)} />
                <input type="number" className="form-control mb-2" placeholder="phone" name="phone" value={phone} onChange={e => onInputChange(e)} />
                <input type="text" className="form-control mb-2" placeholder="company" name="company" value={company} onChange={e => onInputChange(e)} />
                <input type="text" className="form-control mb-2" placeholder="title" name="title" value={title} onChange={e => onInputChange(e)} />
                <select className="form-control">
                  <option value=''>select a group</option>
                </select>
                <input type="submit" className="btn btn-success mt-2" />
                <Link to={'/contact/list'} className="btn btn-dark ms-2 mt-2">Cancel</Link>
              </form>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Addcontact;