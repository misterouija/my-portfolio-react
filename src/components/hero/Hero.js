import './Hero.css';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

//AOS.init();

const Hero = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section id='hero' className='d-flex min-vh-100 align-items-center'>
            <div
                className='container d-flex flex-column align-items-center'
                data-aos='zoom-in'
                data-aos-delay='200'
            >
                <h1 className='fw-bold my-2'>Leighton Grant</h1>
                <h2 className='fs-4 fw-light my-2'>
                    Professional Frontend Web Developer
                </h2>
                <a
                    href='about'
                    className='btn btn-about btn-secondary rounded-pill px-5 my-4'
                >
                    About Me
                </a>
            </div>
        </section>
    );
};

export default Hero;