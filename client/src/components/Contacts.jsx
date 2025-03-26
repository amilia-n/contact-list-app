function Contacts({ contacts }){
  return(
    <div>
      {contacts.map((contact) => 
      <ul key={contact.contact_id}>
        {/*when we get the error that each child needs a unique key, 
         it needs to be on the parent element rendering each item */}
          <li>{contact.name}</li>
          <li>{contact.phone}</li>
          <li>{contact.email}</li>
      </ul>
         )}
    </div>

  )
}

export default Contacts;