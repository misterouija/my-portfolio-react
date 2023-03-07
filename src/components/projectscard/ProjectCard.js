import './ProjectCard.css';
function ProjectCard(props) {
    return (
        <div className='col'>
            <div className='card text-light project-card'>
                <img src={props.image} className='card-img' alt={props.title} />

                <div className='card-img-overlay sticky'>
                    <h5 className='card-title'>{props.title}</h5>
                    {/* <p className='card-text'>{props.description}</p> */}
                    <a href={props.url} className=''>
                        View
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
