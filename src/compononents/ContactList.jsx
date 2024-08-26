import React from 'react';
import { Link } from 'react-router-dom'; // route to contact list to add contact
import ContactCard from './ContactCard';

const ContactList = ( { contacts , getContactId } ) => {
  const deleteContactHandler = (id)=>{
    getContactId(id);
  };
  const renderContactList = contacts.map((contact) =>{
    return(
      <ContactCard 
      key={contact.id}
        id = {contact.id}
        name={contact.name}
        email={contact.email}
        clickHandler ={deleteContactHandler}/>
    )
  })

  
  return (
    <div className='list-group'>
      <div className='mt-3 d-flex align-items-center justify-content-between'>
        <h2>Contact List</h2>
        <Link to = '/add'>
          <button className='btn btn-outline-primary'>Add Contact</button>
        </Link>
      </div>
      {renderContactList}
    </div>
  )
}

export default ContactList