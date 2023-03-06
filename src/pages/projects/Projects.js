import './Projects.css';
// Projects
import projects from '../../assets/projects.json';
import ProjectCard from '../../components/projectscard/ProjectCard';

const Projects = () => {
    const myProjects = projects.map((project, index) => {
        return (
            <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                url={project.url}
                github={project.github}
                key={index}
            />
        );
    });

    return (
        <section className='projects-page min-vh-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h2 className='title projects-title text-center'>
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
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 d-flex justify-content-center'>
                    {myProjects}
                </div>
            </div>
        </section>
    );
};

export default Projects;
