import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Hero from './Hero';
import { useGlobalContext } from './useContextData';
import Submenu from './submenu';

function App() {

  const {message} = useGlobalContext();

  return (
    <div className='AppContainer'>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </div>
  );
}

export default App;
