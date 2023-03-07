//import logo from './logo.svg';
import './App.css';
// Routes
import { Route, Routes } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Pages
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import ProjectDetails from './pages/projects/ProjectDetails';

// elements
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects/:id' element={<ProjectDetails />} />
                <Route path='/' element={<Hero />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
