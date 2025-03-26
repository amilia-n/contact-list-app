import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type){
    case 'add_name':{
      return{
        name: action.addName
      };
    }
    case 'add_email':{
      return{
        name: action.addEmail
      }
    }
  }
  throw Error('unknown action');
}

const initialState = { name: "", email: "" }; //intial start for states

function CreateContact({contacts}){
  const [state,dispatch] = useReducer(reducer, initialState);

  // function handleSubmit(){
  //   dispatch({type: 'submit_form'});
  // }

  function handleInputChange(e){
    dispatch({
      type:'add_name',
      addName: e.target.value,
    })
  }

  
  return(
    <div>
      <input 
        name="name"
        value={state.name}
        onChange={(e) => handleInputChange(e)}
      />
      <input 
        value={state.email}
        onChange={(e) => handleInputChange(e)}
      />

      <h2>Added name {state.name} with email {state.email}</h2>
    </div>



  )
}

export default CreateContact;


// const createContact = async (e) => {
//   e.preventDefault();
//   console.log("new contact submitted:");
//   try{
//   const response = await fetch("/contacts", {
//     method: "Post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newSighting),//update to the useReducer that will send to the backend
//   });
//   if(!response.ok){
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   } 
//   const data = await response.json();
//   console.log("fetched data:", data);

//   setNewSightings(data); 

//   // if(data.response_code != 0){
//   //   console.log("no results found");
//     // setErrorHandle(true); 
//   //}
//   } catch(error){
//     console.error("error fetching data: ", error);
//   } 
// };

