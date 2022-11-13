import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

function Home() {
  const [essays, setEssays] = useState([]);

  useEffect(() => {
    async function fetchEssays() {
      const essaysCollectionRef = collection(db, "essays");
      const data = await getDocs(essaysCollectionRef);

      setEssays(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchEssays();
  }, []);



  async function deleteEssay(id) {
    const essayDoc = doc(db, "essays", id);
    await deleteDoc(essayDoc);
  };

  return (
    <>
      <h2>Home Page</h2>
      <div>
        {essays.map((essay) => {
          return (
          <div>
            <h3>{essay.title}</h3>
            <p>{essay.body}</p>
            <p>{essay.author.name}</p>
            <button onClick={() => deleteEssay(essay.id)}>&#128465;</button>
          </div>
        )})}
      </div>
    </>
  );
};

export default Home;