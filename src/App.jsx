import { useState } from "react";

import SignUpForm from "./components/SignUpForm.jsx";
import Authenticate from "./components/Authenticate.jsx";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="app">
      <SignUpForm onSetToken={setToken} className="sign-up-form" />
      <Authenticate token={token} />
    </div>
  );
}

export default App;
