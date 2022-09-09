import { useAuth0 } from "@auth0/auth0-react";
import "../sytles/profileLeft.css";

import React from "react";

const ProfileLeft = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article className="profile_left">
        {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
      </article>
    )
  );
};

export default ProfileLeft;
