import { useState } from 'react'
import './App.css'

function App() {
  const [fetchContacts, setFetchContacts] = useState([]);
  const [errorHandle,setErrorHandle] = useState(false);

  const fetchContacts = async (contactId = null) => { 
    try {
      const url = contactId ? `/contacts/${contactsId}` : "/contacts"; 
      const res = await fetch("/contacts");
      if(!res.ok) throw new Error("Failed to fetch contacts");
      const data = await res.json();
      console.log("contacts species: ", data)
      return setContacts(data);
    } catch(error) {
      console.error("Error fetching contacts: ", error);
      //setErrorHandle(true); //to build out an error component 
      return [];
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  


  return (

  )
}

export default App
