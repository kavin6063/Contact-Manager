import React, { useState ,useEffect } from 'react';
import {BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Header from './compononents/Header';
import AddContact from './compononents/AddContact';
import ContactList from './compononents/ContactList';
import ContactDetail from './compononents/ContactDetail';

const App = () => {

  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts , setContacts] = useState([]);


  useEffect (()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts && retrieveContacts.length > 0) {
      setContacts(retrieveContacts);
    }
  },[]);

  useEffect (()=>{
    if (contacts.length >= 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContactHandler = (contact)=>{ 
    setContacts([...contacts , { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };
  return (
    <div className='container'>
      <Router>
        <Header/>
        <Routes>

          <Route 
            path='/add' 
            element={<AddContact addContactHandler={addContactHandler} />}/>

          <Route 
            path='/' 
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}/>

           <Route 
            path='/contact/:id' 
            element = {<ContactDetail contacts={contacts}/>}/>

        </Routes>
      </Router>

    </div>
  );
};

export default App