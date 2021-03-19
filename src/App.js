import './App.css'
import Navbar from './Components/Header/Navbar';
import Writerdetails from './Components/Body/Writerdetails';
import FeaturesLeft from './Components/Features/FeaturesLeft';
import Opinions from './Components/Opinions/Opinions';
import MockupCard from './Components/Card/MockupCard';



function App() {
  return (      
    <>
     <Navbar />
     <Writerdetails />
     <FeaturesLeft />
     <Opinions />

     <MockupCard />
    </>  
      );
}
export default App;
