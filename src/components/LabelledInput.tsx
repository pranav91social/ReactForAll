import Button from "./Button";

interface LabelledInputProps {
  id: string;
  label: string;
  type: string;
  handleRemoveFieldCB: (id: number) => void;
  value?: string;
  handleFormStateChangeCB?: (id: number, value: string) => void;
}

const LabelledInput = ({
  id,
  label,
  type,
  handleRemoveFieldCB,
  handleFormStateChangeCB,
  value = "",
}: LabelledInputProps) => {
  const handleRemoveField = () => {
    handleRemoveFieldCB(parseInt(id));
  };

  const handleFieldValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleFormStateChangeCB) {
      handleFormStateChangeCB(parseInt(id), e.target.value);
    }
  };

  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <div className="flex mb-2 gap-2">
        <input
          id={id}
          type={type}
          className="border-2 border-gray-200 rounded-lg p-2 flex-1"
          value={value}
          onChange={handleFieldValueChange}
        />
        <Button type="button" label="Remove" onClick={handleRemoveField} />
      </div>
    </div>
  );
};

export default LabelledInput;
