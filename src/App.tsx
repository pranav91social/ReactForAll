import { useState } from "react";
import "./App.css";
import AppContainer from "./AppContainer";
import Header from "./Header";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  const [state, setState] = useState<string>("HOME");

  const handleOpenForm = () => {
    setState("FORM");
  };

  const handleCloseForm = () => {
    setState("HOME");
  };

  return (
    <AppContainer>
      <div className="p-4 m-auto bg-white shadow-lg rounded-xl">
        <Header title="Welcome to Lesson 5 of $react-typescript with #tailwindcss" />
        {state === "HOME" ? (
          <Home handleOpenFormCB={handleOpenForm} />
        ) : (
          <Form handleCloseFormCB={handleCloseForm} />
        )}
      </div>
    </AppContainer>
  );
}

export default App;
