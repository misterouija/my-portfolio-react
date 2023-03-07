import projects from '../../assets/projects.json';
import { Details } from '../../components/projectscard/ProjectCard';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
    useEffect(() => {
        AOS.init();
    }, []);

    const { id } = useParams();

    const projectDetail = projects.filter((project, index) => {
        return project.title === id;
    });

    const myProjectDetails = projectDetail.map((project, index) => {
        return (
            <Details
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
                    <div className='col-12'>
                        <h2 className='title projects-title text-center mt-5'>
                            {id} Details
                        </h2>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='d-flex justify-content-center'>
                    {myProjectDetails}
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails;
