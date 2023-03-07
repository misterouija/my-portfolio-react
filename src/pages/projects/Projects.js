import './Projects.css';
// Projects
import projects from '../../assets/projects.json';
import { ProjectCard } from '../../components/projectscard/ProjectCard';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const myProjects = projects.map((project, index) => {
        return (
            <ProjectCard
                title={project.title}
                img={project.img}
                sdesc={project.sdesc}
                desc={project.desc}
                url={project.url}
                repo={project.repo}
                key={index}
            />
        );
    });

    return (
        <section
            className='projects-page py-5'
            data-aos='fade-up'
            data-aos-delay='300'
        >
            <div className='container my-5'>
                <div className='row'>
                    <div className='col'>
                        <h2 className='title projects-title text-center my-5'>
                            Projects
                        </h2>
                        <p className='intro projects-intro text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 d-flex justify-content-center'>
                    {myProjects}
                </div>
            </div>
        </section>
    );
};

export default Projects;
