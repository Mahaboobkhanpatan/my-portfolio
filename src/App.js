// import logo from './logo.svg';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/Introduction/Intro';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
