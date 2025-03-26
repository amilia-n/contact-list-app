import { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type){
    case 'Form_Input':{
      return{
        ...state,
        [action.formInput.name]:action.formInput.value //always return copies, should not manipulate states in place. Return copy of all the previous objects.
        //set the key that will be dynamic and 
      };
    }
    default:
        throw new Error("invalid action type");
  }
}

const initialState = { name: "", email: "", phone: "", notes: "", birthday: ""}; //intial start for states

function CreateContact(){
  const [formState, dispatchForm] = useReducer(formReducer, initialState); //dispatch to our reducer function

  function handleSubmit(e){
    e.preventDefault();
    dispatchForm({type: 'submit_form'});
  }

  function formChange(e){ //when on change occurs on the form it will create an event, including inputs when we type an input we want to dispatch input 
    dispatchForm({
      type:'Form_Input',
      formInput: {name: e.target.name, value: e.target.value}, //we want the input value to be assigned to the object state. Can use e.target.name to assign values to object keys
      //pass in a value prop
    })
  }

  
  return(
    <div>{/* can add an event listener on the form to capture changes. Event delegation.Capture input on the parent element*/}
      <form onSubmit={handleSubmit} onChange={formChange}> 
        <label htmlFor="name">Contact name</label>
        <input 
          id="name"
          type="text"
          name="name"
          value={formState.name}
        />
        <label htmlFor="email">Contact email</label>
        <input 
          id="email"
          name="email"
          value={formState.email}
        />
        <label htmlFor="tel">Contact phone</label>
        <input 
          id="tel"
          type="tel"
          name="phone"
          // value={formState.name}
        />
        <label htmlFor="notes">notes</label>
        <textarea
          id="notes"
          name="notes"
          // value={formState.name}
        />
        <label htmlFor="birthday">birthday</label>
        <input
          id="birthday"
          type="date"
          name="birthday"
          // value={formState.birthday}

        />
      </form>
      <button type="submit">Create contact</button>

      <h2>Added name {formState.name} with email {formState.email}</h2>
    </div>



  )
}

export default CreateContact;

