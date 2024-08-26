import React from 'react';
import user from '../assets/images/user.jpeg';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useParams,useNavigate } from 'react-router-dom';
const ContactDetail = ({ contacts }) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const contact = contacts.find(contact => contact.id === id);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  const { name, email } = contact;
    return (
        <div className="container mt-4">
          <div className="card">
            <div className="row g-0 align-items-center justify-content-between">
              <div className="col-md-4">
                <img src={user} className="img-fluid rounded-start" alt="User" />
              </div>
              <div className="col-md-8">
                <div className="card-body" >
                  <h5 className="card-title custom-name ">{name}</h5>
                  <p className="card-text custom-email">
                    {email}
                  </p>
                </div>
              </div>
            </div>
          </div>
            <button className='btn btn-primary mt-4' onClick={()=>navigate('/')}>
                <IoArrowBackCircleOutline size={"25px"} className='me-2'/>
                Back To Contact
            </button>
        </div>
      );
}

export default ContactDetail