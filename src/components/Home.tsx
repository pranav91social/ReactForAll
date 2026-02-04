import logo from "./../logo.svg";
import Button from "./Button";

interface HomeProps {
  handleOpenFormCB: () => void;
}

const Home = ({ handleOpenFormCB }: HomeProps) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex">
        <img src={logo} alt="Home" className="h-48" />
        <div className="flex-1 flex items-center justify-center h-48">
          <p>Welcome to the Home Page</p>
        </div>
      </div>
      <Button type="button" label="Show Form" onClick={handleOpenFormCB} />
    </div>
  );
};

export default Home;
