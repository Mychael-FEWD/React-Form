import { useState } from "react";

import SignUpForm from "./components/SignUpForm.jsx";
import Authenticate from "./components/Authenticate.jsx";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm onSetToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
