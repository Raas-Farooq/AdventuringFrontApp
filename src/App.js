import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Hero from './Hero';
import { useGlobalContext } from './useContextData';


function App() {

  const {message} = useGlobalContext();

  return (
    <>
      <h1> {message}</h1>
      <Navbar />
      <Hero />
      <Sidebar />
    </>
  );
}

export default App;
