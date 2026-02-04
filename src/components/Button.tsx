interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ label, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-fit bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

export default Button;
