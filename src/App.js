import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Hero from './Hero';
import { useGlobarContext } from './useContextData';


function App() {

  const topInformation = useGlobarContext();

  console.log("topInformatoin :", topInformation);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sidebar />
    </div>
  );
}

export default App;
