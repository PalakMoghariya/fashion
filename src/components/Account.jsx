import React, { useState } from 'react';
import './css/account.css';

function Account() {
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const editDetails = () => {
    setIsEditing(true);
    setNewUsername(document.getElementById('username').textContent);
    setNewEmail(document.getElementById('email').textContent);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const updateDetails = () => {
    document.getElementById('username').textContent = newUsername;
    document.getElementById('email').textContent = newEmail;
    setIsEditing(false);
    alert('Your details have been updated successfully.');
  };

  return (
    <div className='account'>
      <header>
        <h1>Welcome to Your Account</h1>
      </header>

      <section id='account-details'>
        <h2>Your Details</h2>
        <br />
        <p><strong>Username:</strong> <span id='username'>JohnDoe123</span></p>
        <p><strong>Email:</strong> <span id='email'>johndoe@example.com</span></p>
        <br />
        <button onClick={editDetails} className='btn1'>Edit Details</button>
      </section>
      <br />

      {isEditing && (
        <section id='update-form'>
          <h2>Update Your Details</h2>
          <br />
          <form id='updateForm'>
            <label htmlFor='newUsername'>New Username:</label>
            <input
              type='text'
              id='newUsername'
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder='Enter new username'
            />
            <br />                                                      
            <label htmlFor='newEmail'>New Email:</label>
            <input
              type='email'
              id='newEmail'
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder='Enter new email'
            />
            <br />
            <br />
            <button type='button' onClick={updateDetails} className='btn1'>
              Save Changes
            </button>
            <button type='button' onClick={cancelEdit} className='btn1'>
              Cancel
            </button>
          </form>
        </section>
      )}
    </div>
  );
}

export default Account;
