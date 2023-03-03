import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
//import './style.css';

const Homepage = () => {
    return (
        <div className='d-flex h-100 text-center text-white bg-dark homepage-wrapper'>
            <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
                <Header />
                <Hero />
                <Footer />
            </div>
        </div>
    );
};

export default Homepage;
