
/* import Footer from './components/layout/Footer';
import Content from './components/layout/Content'; */

import Home from './routes/Home';
import Projects from './routes/Projects';
import CV from './routes/CV';
import Contact from './routes/Contact';

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cv" element={<CV/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
