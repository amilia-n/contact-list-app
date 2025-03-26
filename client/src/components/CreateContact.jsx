import { useReducer, useState } from "react";

function formReducer(state, action) {
  switch (action.type){
    case "FormInput":{
      return{
        ...state,
        [action.formInput.name]:action.formInput.value 
        //always return copies, should not manipulate states in place. Return copy of all the previous objects.
        //set the key that will be dynamic
        //creating the new state
      };
    }
    case "Reset":
      return initialState;
    
    default:
        throw new Error("invalid action type");
  }
}

const initialState = { name: "", email: "", phone: "", notes: "", birthday: ""}; //intial start for states

function CreateContact({ createNewContact }){
  const [formState, dispatchForm] = useReducer(formReducer, initialState); //dispatch to our reducer function
  //form is being changed dynamically in formState

  const onSubmit = (e) => {
    e.preventDefault();
    createNewContact(formState);
  }

  function formChange(e){ //when on change occurs on the form it will create an event, including inputs when we type an input we want to dispatch input 
    dispatchForm({
      type:"FormInput",
      formInput: {name: e.target.name, value: e.target.value}, //we want the input value to be assigned to the object state. Can use e.target.name to assign values to object keys
      //pass in a value prop
    })
  }

  
  return(
    <div>{/* can add an event listener on the form to capture changes. Event delegation.Capture input on the parent element*/}
      <form onSubmit={onSubmit} onChange={formChange}> 
        <label htmlFor="name">Contact name</label>
        <input 
          id="name"
          type="text"
          name="name"
        />
        <label htmlFor="email">Contact email</label>
        <input 
          id="email"
          name="email"
        />
        <label htmlFor="tel">Contact phone</label>
        <input 
          id="tel"
          type="tel"
          name="phone"
        />
        <label htmlFor="notes">notes</label>
        <textarea
          id="notes"
          name="notes"
        />
        <label htmlFor="birthday">birthday</label>
        <input
          id="birthday"
          type="date"
          name="birthday"
        />
        <button type="submit">Create contact</button>
      </form>
      {/* if we want to add more input then we would make sure it matches our dispatch values 
        can have a value field on each input too, to connect it to the object value={formState.name}*/}

      <h2>Added name {formState.name} with email {formState.email}</h2>
    </div>



  )
}

export default CreateContact;

