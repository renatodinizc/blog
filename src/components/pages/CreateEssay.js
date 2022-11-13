import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';


function CreateEssay({ user }) {
  const [essay, setEssay] = useState({title: "", body: "",});

  let navigate = useNavigate();
  const essaysCollectionRef = collection(db, "essays");

  function handleChange(event) {
    setEssay(current => (
      {...current, [event.target.name]: event.target.value}
    ));
  };

  function handleEssaySubmission(event) {
    event.preventDefault();
    createEssay();
    setEssay({ title: "", body: "" })
    navigate("/");
  };


  async function createEssay() {
    await addDoc(essaysCollectionRef, {
      title: essay.title,
      body: essay.body,
      author: { id: user.uid, name: user.displayName }
    });
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