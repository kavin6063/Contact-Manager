import React from 'react'
import { FaRegTrashAlt, FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ContactCard = ({ id, name, email ,clickHandler }) => {
  const contact = { id, name, email };
  return (
    <div className='list-group-item my-3 d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center justify-content-between gap-4'>
      <FaRegUser size={"26px"}/>
      <div>
        <Link to={`/contact/${id}`}
          className='contact-link'>
          <div className='fw-bold mb-1'>{name}</div>
        </Link>
        <div>{email}</div>
      </div>
      </div>
      <button><FaRegTrashAlt color='red' onClick={()=> clickHandler(id)} /></button>
    </div>
  )
}

export default ContactCard