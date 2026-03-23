import { Outlet } from "react-router-dom";
import Header from "./src/components/Header/Header";
import MainContainer from "./src/components/MainContainer/MainContainer";
import Footer from "./src/components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
