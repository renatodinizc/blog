import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';


function CreateEssay() {
  const [essay, setEssay] = useState({
                                      title: "",
                                      body: "",
                                      author: {
                                        id: "",
                                        name: ""
                                      }
                                     });

  let navigate = useNavigate();
  const essaysCollectionRef = collection(db, "essays");

  function handleChange(event) {
    setEssay(prevState => (
      {...prevState, [event.target.name]: event.target.value}
    ));
  };

  function handleEssaySubmission(event) {
    event.preventDefault();
    setEssay(prevState => (
      {...prevState,
        author: {
          id: auth.currentUser.uid,
          name: auth.currentUser.displayName
        }}
    ));
    createEssay();
    navigate("/");
  };


  async function createEssay() {
    await addDoc(essaysCollectionRef, essay);
  };

  return (
    <>
      <h2>Create Essay Page</h2>
      <form onSubmit={handleEssaySubmission}>
        <label>Title</label>
        <input type="text" name="title" onChange={(handleChange)} placeholder="Insert essay title here" autoComplete="off" />
        <label>Body</label>
        <textarea type="text" name="body" onChange={(handleChange)} placeholder="Insert essay body here" />
        <button type="submit">Submit post</button>
      </form>
    </>
  );
};

export default CreateEssay;