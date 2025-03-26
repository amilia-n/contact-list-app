import { useState } from "react";

function Contacts({ contacts, fetchContacts, fetchStarSign }){
  const[isAddingContact, setIsAddingContact] = useState(false);

  return(
    <div>
      <span className="header"><h1>Contacts</h1></span>
      {contacts.map((contact) => 
        <ul key={contact.contact_id}>
          {/*when we get the error that each child needs a unique key, 
          it needs to be on the parent element rendering each item */}
            <li>{contact.name}</li> 
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
            <button onClick={() => fetchContacts(contact.contact_id) && fetchStarSign(contact.birthday)}>view more</button>
        </ul>
         )}
      {/* <button>Add Contact</button> this will conditionally render the add contact form */}
    </div>

  )
}

export default Contacts;