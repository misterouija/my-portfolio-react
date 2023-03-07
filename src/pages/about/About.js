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
                                I am a frontend developer with over five years
                                of experience in creating responsive and
                                user-friendly websites and web applications.
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
                            <h3>Front-end Web Developer</h3>
                            <p>
                                I am a newly qualified front-end developer
                                residing in the UK and excited to join a company
                                that has an innovative and supportive spirit.
                                Trained through the Harvard and MIT-created
                                course provider, EdX, I have acquired a range of
                                skills that will set the tone for my career in
                                front-end development. Prior to acquiring my
                                professional qualification, I had undertaken
                                personal coding projects for over 5 years in my
                                spare time. So, why coding? Making the decision
                                to switch careers came because I relocated from
                                London to Lincolnshire, having previously worked
                                as an electronics technician for many years.
                                Solving problems using code is a great passion
                                of mine and armed with a cup of coffee, I am
                                keen to delve into the realm of professional
                                problem-solving. Supplied with the eagerness to
                                pursue front-end development professionally, I
                                am ready for the next chapter in my career.
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
                                I have a strong knowledge of HTML, CSS,
                                JavaScript, React, Bootstrap and other web
                                technologies. I enjoy working with diverse teams
                                and collaborating with other developers to
                                deliver high-quality products that meet the
                                client's needs and expectations. I am always
                                eager to learn new skills and explore new
                                challenges in the field of web development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
