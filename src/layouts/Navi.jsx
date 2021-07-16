import React from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignIn from "./SignIn";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./csses/filter.css";
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  let history = useHistory();
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item className="hrms-font" name="HRMS" />
          <Menu.Item name="Main Page" />
          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
