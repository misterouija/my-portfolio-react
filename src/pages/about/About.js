import './About.css';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import profile from '../../assets/profile.jpg';

function About() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section
            className='about-page py-5'
            data-aos='fade-up'
            data-aos-delay='200'
        >
            <div className=''>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='title about-title text-center my-5'>
                                About
                            </h2>
                            <p className='intro about-intro text-center'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col col-md-4 about-img'>
                            <img
                                className='img-responsive'
                                src={profile}
                                alt='leighton grant'
                            />
                        </div>

                        <div className='col col-md-8 about-info'>
                            <h3>Frontend Web Developer</h3>
                            <p>
                                do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='title about-title text-center'>
                                Skills
                            </h2>
                            <p className='intro skills-intro text-center'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
