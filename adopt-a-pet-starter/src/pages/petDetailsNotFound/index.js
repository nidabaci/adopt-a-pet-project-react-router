import React from 'react';

// import useHistory here.
import { useHistory } from 'react-router-dom';

const PetDetailsNotFound = () => {

  // get the history object from useHistory()
  const history = useHistory();

  const goBack = () => {
    // Go back!
    history.goBack();
  }
  
  return (
    <main className="page">
      <h3>404: Sorry, but the details for this pet have not been uploaded by the shelter yet.</h3>
      <img
        src="https://i.chzbgr.com/full/8362031616/h9EB970C5/weve-lost-our-corgination"
        alt=""
      />
      <div className="actions-container">
        <button className="button" onClick={goBack}>
          Go Back
        </button>
      </div>
    </main>
  );
};

export default PetDetailsNotFound;
