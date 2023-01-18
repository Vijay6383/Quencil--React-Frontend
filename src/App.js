import './App.css';
import Navbar from './Navbar/Navbar';
import SectionOne from './Pages/Section1/SectionOne';
import SectionTwo from './Pages/Section2/SectionTwo';
import SectionThree from './Pages/Section3/SectionThree';
import SectionFour from './Pages/Section4/Section4';
import SectionFive from './Pages/Section5/Section5';
import SectionSix from './Pages/Section6/Section6';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default App;
