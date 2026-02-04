import { useState } from "react";
import Button from "./Button";
import LabelledInput from "./LabelledInput";

interface FormProps {
  handleCloseFormCB: () => void;
}

const formFields = [
  { id: 1, label: "First Name", type: "text" },
  { id: 2, label: "Last Name", type: "text" },
  { id: 3, label: "Email", type: "email" },
  { id: 4, label: "Date of Birth", type: "date" },
  { id: 5, label: "Phone Number", type: "tel" },
];

const Form = ({ handleCloseFormCB }: FormProps) => {
  const [formState, setFormState] = useState(formFields);
  const [newFieldLabel, setNewFieldLabel] = useState("New Field");

  const handleAddField = () => {
    const newField = {
      id: Number(new Date()),
      label: newFieldLabel || "New Field",
      type: "text",
    };

    setFormState([...formState, newField]);
    setNewFieldLabel("New Field");
  };

  const handleRemoveField = (id: number) => {
    setFormState((formState) => formState.filter((field) => field.id !== id));
  };

  const handleNewFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFieldLabel(e.target.value);
  };

  const handleFormStateChange = (id: number, value: string) => {
    setFormState((formState) =>
      formState.map((field) => (field.id === id ? { ...field, value } : field)),
    );
  };

  const handleResetForm = () => {
    setFormState((formState) =>
      formState.map((field) => ({ ...field, value: "" })),
    );
  };

  return (
    <div className="p-4 divide-y-2 divide-dotted">
      <div className="mb-4">
        {formState.map((field: any) => (
          <LabelledInput
            id={field.id}
            label={field.label}
            type={field.type}
            key={field.id}
            handleRemoveFieldCB={handleRemoveField}
            value={field?.value || ""}
            handleFormStateChangeCB={handleFormStateChange}
          />
        ))}
      </div>

      <div className="flex gap-2 pt-4 mb-4 text-sm">
        <input
          className="border-2 border-gray-200 rounded-lg p-2 flex-1"
          value={newFieldLabel}
          onChange={handleNewFieldChange}
        />
        <Button label="Add Field" type="button" onClick={handleAddField} />
      </div>

      <div className="flex gap-4 pt-4">
        <Button label="Submit" type="button" />
        <Button label="Reset" type="button" onClick={handleResetForm} />
        <Button label="Close Form" type="button" onClick={handleCloseFormCB} />
      </div>
    </div>
  );
};

export default Form;
