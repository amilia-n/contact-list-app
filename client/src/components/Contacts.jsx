import { useState } from "react";

function Contacts({ contacts, handleViewMoreClick, fetchContacts, searchResult }){
  
  const filterContacts = contacts.filter(contact => 
  (Array.isArray(searchResult) ? searchResult : contacts).some(result => contact.name.toLowerCase().includes(result.name.toLowerCase())
    ));
  
  return(
    <div>
      <h1>Contacts</h1>
      {filterContacts.length > 0 ?(
        filterContacts.map((contact) => (
        <ul key={contact.contact_id}>
          {/*when we get the error that each child needs a unique key, 
          it needs to be on the parent element rendering each item */}
            <li>{contact.name}</li> 
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
            <button onClick={async () => {await fetchContacts(contact.contact_id);
                                               handleViewMoreClick(contact.birthday);
                                               }}
                                               >view more
            </button>
        </ul>
         ))
        ):(
          <p>no contacts found</p>
        )}
      {/* <button>Add Contact</button> this will conditionally render the add contact form */}
      {/* we add a async/await with fetch contacts and starsign for fetchcontacts to complete before startsign fetch starts */}
    </div>
  )
}

export default Contacts;