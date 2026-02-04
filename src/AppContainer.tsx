type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer = (props: AppContainerProps) => {
  return (
    <div className="flex min-h-screen bg-gray-100 items-center p-8">
      {props.children}
    </div>
  );
};

export default AppContainer;
