// Routes
import { Route, Routes } from 'react-router-dom';

// Pages
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import ProjectDetails from './pages/projects/ProjectDetails';

// Components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects/:id' element={<ProjectDetails />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
