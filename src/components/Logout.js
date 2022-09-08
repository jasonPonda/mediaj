import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";
import React from "react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <button onClick={() => logout()}>Sign out</button>
      </>
    )
  );
};

export default LogoutButton;
