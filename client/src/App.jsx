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



  useEffect(() => {
    fetchContacts(2); //testing single fetch for function update 
    fetchStarSign("2017-06-01");//this is test adjust when updating the app
  }, []);



  return (
    <div className="appContainer">
     <Contacts 
      contacts={contacts} />
      <CreateContact 
      contacts={contacts} />
      {/* <ViewContact /> */}
    </div>
     

  )
}

export default App
