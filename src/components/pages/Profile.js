import React from "react"


function Profile({ user}) {
  return (
    <>
      <h1>Welcome { user && user.displayName }</h1>
    </>
  );
};

export default Profile;