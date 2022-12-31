import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();

  return (
    <div>
      <h1>{location.state.name}</h1>
      <p>{location.state.description}</p>
    </div>
  );
};

export default Profile;
