import React from "react";
const UserContext = React.createContext({
  loggedInUser: "defaultUser",
});

export default UserContext;
