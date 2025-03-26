import { useState, useEffect } from 'react'
import './App.css'
import Contacts from './components/Contacts';
// import ViewContact from './components/ViewContact';
import CreateContact from './components/CreateContact';


function App() {
  const [contacts, setContacts] = useState([]);
  const [findContact, setFindContact] = useState([]);
  const [errorHandle, setErrorHandle] = useState(false);
  const [starSign, setStarSign] = useState([]);

  const fetchContacts = async (contactId = null) => { 
    try {
      const url = contactId ? `/contacts/${contactId}` : "/contacts"; 
      const res = await fetch(url);

      if(!res.ok) throw new Error("Failed to fetch contacts");

      const data = await res.json();
      console.log("fetched data: ", data)

      if(contactId){
        setFindContact(data);
        return data;
      }else{
        setContacts(data);
      }
    } catch(error) {
      console.error("Error fetching contacts: ", error);
      //setErrorHandle(true); //to build out an error component 
      return [];
    }
  };

  const fetchStarSign = async (birthday) => { //will take a birthday input from the contact selected to create this fetch
    try {
      const res = await fetch(`/contacts/birthday/${birthday}`);

      if(!res.ok) throw new Error("Failed to fetch starsign");

      const data = await res.json();
      console.log("fetched data: ", data)

      return setStarSign(data);
    } catch(error) {
      console.error("Error fetching starsign: ", error);
      //setErrorHandle(true); //to build out an error component 
      return [];
    }
  };


  const createNewContact = async(formData)=>{// I think I can pass the state of the contact instead of the event?
    console.log("contact submitted:", formData);
  
    try{
    const response = await fetch("/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    } 
    const data = await response.json();
    console.log("fetched data:", data);
    //not sure if I need to store the response, unless I want a message here 
    //might need an editing state here too 
  
    // if(data.response_code != 0){
    //   console.log("no results found");
      // setErrorHandle(true); //will come back to setting this error handling depending on response from the backend
    //}
    } catch(error){
      console.error("error fetching data: ", error);
    } 
  }

  useEffect(() => {
    fetchContacts();
    fetchStarSign();
  }, []);



  return (
    <div className="appContainer">
     <Contacts 
      contacts={contacts} />
      <CreateContact
      createNewContact={createNewContact} />
      {/* <ViewContact /> */}
    </div>
     

  )
}

export default App





