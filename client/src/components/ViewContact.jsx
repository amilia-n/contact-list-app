//TO-DO: 
  //need functionality to edit the notes of a subject 
  //can have delete option here too 
  //modal profile card 
  //I want this to dynamically render when profile is selected

import { TfiTrash } from "react-icons/tfi";
import { SlPencil } from "react-icons/sl";

function ViewContact({ findContact, starSign, deleteContact }){

  if(!findContact || Object.keys(findContact).length === 0 ){
    return <p>loading contact...</p>;
  }

  console.log('find contact in view contact component', findContact);

  return(
    <div className="card">
      <img src="img.jpg" alt="John" style={{"width" : "100%"}}/>
      {Object.entries(findContact).map(([key, value]) => ( 
      <div key={key}>
        <p>{value}</p>
      </div>
      ))}
      <p>Harvard University</p>
      {Object.entries(starSign).map(([key,value]) => (
              <div key={key}>
              <p>{value}</p>
            </div>

      ))}
      <p><button onClick={async () => {
                if (findContact?.contact_id){
                  deleteContact(findContact.contact_id);
                } else {console.error("contact id is undefined")}}}><TfiTrash /></button></p>
      <p><button>close</button></p>
    </div>
    )
}

export default ViewContact;