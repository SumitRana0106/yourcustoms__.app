import logo from './logo.svg';
import './App.css';
import Home from './homepage/home.js';
import About from './about/about';
import Error from './error/error';
import Contactme from './Contactme/contactme.js';
import Page_1 from './TravelItenary/1.js';
import AboutWife from './TravelItenary/2.js';
import PageTemplateWrapper from './BlogPageTemplate/v1/template';

import {Route, Routes} from 'react-router-dom';




function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contactme/" element={<Contactme />} />
            {/* <Route path="/page/1/" element={<Page_1 />} /> */}
            <Route path="/about-my-wife/" element={<AboutWife />} />
            <Route path="/page/:id" element={<PageTemplateWrapper />} />
            <Route path="*" element={<Error />} />
          </Routes>
    </div>
  );
}

export default App;
