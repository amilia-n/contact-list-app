import { BsSearch } from "react-icons/bs";
import { useState } from 'react'

function SearchBar ({setSearchResult}) {
  const [searchContact, setSearchContact] = useState([]);

  const fetchContactSearch = async (name) => { 
    try {
      const res = await fetch(`/contacts/search/${name}`);

      if(!res.ok) throw new Error("Failed to fetch contact");

      const data = await res.json();
      console.log("fetched data: ", data)

      setSearchResult(data);

    } catch(error) {
      console.error("Error fetching contact: ", error);
      return [];
    }
  };

  const handleChange = (name) => { //sending the parameter through a state to our fetch
    setSearchContact(name);
  }

  const handleSubmit = () => {
    fetchContactSearch(searchContact);

  }

  return (
    <div className="topnav">
      <input 
      type="text" 
      placeholder="search.. "
      value={searchContact}
      onChange={(e) => handleChange(e.target.value)}/>
      <a onClick={() => handleSubmit()}><BsSearch /></a>
    </div>

  )
}

export default SearchBar