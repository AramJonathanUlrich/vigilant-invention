import * as React from 'react';
import { useState } from 'react';
import FlashcardContainer from './FlashcardContainer.jsx';

const MainPage = () => {

  const openForm = () => {
    
  };

  const closeForm = () => {
    document.getElementById('myForm').style.display = 'none';
  };

  const onSubmitClick = (e) => {
    fetch('/create', {
      method: 'POST',
      body: JSON.stringify({
        algoName: document.getElementById('algoName').value,
        algoPromp: document.getElementById('algoPrompt').value,
        algoExample: document.getElementById('algoExample').value,
        algoType: document.getElementById('algoType').value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    e.preventDefault();
  }

  return (
    <div className="header">
      <h1 className="main">Time to Study ALGOS</h1>
      <div className="form-popup" id="myForm">
        <form
          className="form-container"
          id="form-container"
          onSubmit={onSubmitClick}
        >
          <h1>Create flashcard</h1>
          <label htmlFor="algoName">
            <b>Algorithm Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Algorithm Name"
            name="algoName"
            id="algoName"
          />
          <label htmlFor="algoPrompt">
            <b>Algorithm Prompt</b>
          </label>
          <input
            type="text"
            placeholder="Enter Algorithm Prompt"
            name="algoPrompt"
            id="algoPrompt"
          />
          <label htmlFor="algoExample">
            <b>Algorithm Example</b>
          </label>
          <input
            type="text"
            placeholder="Enter Algorithm Example"
            name="algoExample"
            id="algoExample"
          />
          <label htmlFor="algoType">
            <b>Algorithm Type</b>
          </label>
          <input
            type="text"
            placeholder="Enter Algorithm Type"
            name="algoType"
            id="algoType"
          />
          <button type="submit" className="btn btn-primary">
            Create
          </button>
          <button type="reset" className="btn btn-cancel" onClick={closeForm}>
            Discard
          </button>
        </form>
      </div>
      <button className="btn btn-primary btn-large" type="button" onClick={openForm}>
        Create a new flashcard
      </button><br/><br/>
      <FlashcardContainer />
    </div>
  );
};

export default MainPage;
