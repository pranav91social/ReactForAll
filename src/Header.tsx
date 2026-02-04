import logo from "./logo.svg";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  return (
    <div className="flex gap-2 items-center">
      <img src={logo} className="animate-spin h-16 w-16" alt="logo" />
      <h1 className="text-center text-xl flex-1">{props.title}</h1>
    </div>
  );
};

export default Header;
