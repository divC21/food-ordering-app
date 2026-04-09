import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";
import UserContext from "./src/utils/UserContext";
import useOnlineStatus from "./src//utils/useOnlineStatus";

const App = () => {
  const status = useOnlineStatus();
  const [user, setUser] = useState({
    name: "",
  });

  useEffect(() => {
    setUser({
      name: "Diva",
    });
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: user.name }}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
