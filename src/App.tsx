import './styles/global.scss'

import { Hero } from './components/Hero';
import { Contact } from './components/Contact';
import { Background } from './components/Background';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { ProfissionalExperiences } from './components/ProfessionalExperiences';
import { Volunteering } from './components/Volunteering';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Hero/>
      <Contact/>
      <Background/>
      <ProfissionalExperiences/>
      <Volunteering/>
      <Footer/>
    </div>
  );
}

export default App;
