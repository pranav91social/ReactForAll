import { Fragment } from "react";
import "./App.css";
import AppContainer from "./AppContainer";
import Header from "./Header";
import Button from "./components/Button";

const formFields = [
  { id: 1, label: "First Name", type: "text" },
  { id: 2, label: "Last Name", type: "text" },
  { id: 3, label: "Email", type: "email" },
  { id: 4, label: "Date of Birth", type: "date" },
  { id: 5, label: "Phone Number", type: "tel" },
];

function App() {
  return (
    <AppContainer>
      <div className="p-4 mx-auto bg-white shadow-lg rounded-xl flex flex-col gap-2">
        <Header title="Welcome to Lesson 5 of $react-typescript with #tailwindcss" />
        {formFields.map((field) => (
          <Fragment key={field.id}>
            <label>{field.label}</label>
            <input
              type={field.type}
              className="border-2 border-gray-200 rounded-lg p-2 mb-2 w-full"
            />
          </Fragment>
        ))}
        <Button label="Submit" type="submit" />
      </div>
    </AppContainer>
  );
}

export default App;
