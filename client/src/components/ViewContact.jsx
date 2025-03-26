//TO-DO: 
  //need functionality to edit the notes of a subject 
  //can have delete option here too 
  //modal profile card 
  //I want this to dynamically render when profile is selected

function ViewContact({ findContact, starSign }){
  console.log("in viewContact component", findContact, starSign);

  if(!findContact){
    return <p>loading contact...</p>;
  }

  return(
    <div className="card">
      <img src="img.jpg" alt="John" style={{"width" : "100%"}}/>
      {Object.entries(findContact).map(([key, value], i) => ( 
      <div key={i}>
        <p>{value}</p>
      </div>
      ))}
      <p>Harvard University</p>
      {Object.entries(starSign).map(([key,value], i) => (
              <div key={i}>
              <p>{value}</p>
            </div>

      ))}
      <p><button>delete</button></p>
      <p><button>close</button></p>
    </div>
    )
}

export default ViewContact;