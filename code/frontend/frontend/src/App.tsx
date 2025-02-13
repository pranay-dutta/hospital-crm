import Navbar from "./components/Navbar";

function App() {
  const links = ["Home", "About", "Services", "Doctors", "News", "Contact"];
  return (
    <>
      <Navbar links={links} />
    </>
  );
}

export default App;
