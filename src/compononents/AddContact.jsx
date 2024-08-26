import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';  // routes add contact to contact list for both submit and route purpose
const AddContact = (props) => {
  const [name , setName] = useState('');

  const [email , setEmail] = useState('');

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "") {
      alert("All the fields are mandatory!");
      return;
    }
    props.addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate('/'); 
  };

  return (
    <div className='container mt-4'>
      <h2>Add Contact</h2>
      <form onSubmit={add}>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input type="text" name='name' placeholder='Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input type="email" name='email' placeholder='Email' className='form-control'  value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button className='btn btn-primary'>Add</button>
      </form>
    </div>
  )
}

export default AddContact