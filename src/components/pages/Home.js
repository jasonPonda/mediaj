import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../../App.css";
/* import { ReactComponent as Buffer } from "../../icons/buffer.svg"; */
import { ReactComponent as Social } from "../../icons/social_interaction.svg";
import ProfileLeft from "../ProfileLeft";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <main>
      {isAuthenticated ? (
        <div className="home">
          <ProfileLeft />
          <div className="form-text">
            <form className="d-flex">
              <input type="text" className="post" placeholder="Add a post" />
            </form>
          </div>
          <section></section>
        </div>
      ) : (
        <div className="home_login">
          <h1 className="title_home">Welcom to Media J</h1>

          <div className="image">
            {/* <Buffer alt="buffer" /> */}
            <Social alt="social" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
