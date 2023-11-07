import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { Spinner } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import NavBar from "./components/NavBar";
import { useContext, useState } from "react";
import { Context } from ".";
import Rocket from "./components/Rocket";
import Footer from "./components/Footer";

// import { check } from "./http/userAPI";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   check()
  //     .then((data) => {
  //       // Do something with the data if needed.
  //       user.setUser(true);
  //       user.setIsAuth(true);
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occurred during the promise chain.
  //       console.error("Error:", error);
  //     })
  //     .finally(() => {
  //       // This block will be executed regardless of success or failure.
  //       setLoading(false);
  //     });
  // }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
