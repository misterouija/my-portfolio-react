import './ProjectCard.css';
function ProjectCard(props) {
    return (
        <div className='col'>
            <div className='card text-light'>
                <img src={props.image} className='card-img' alt={props.title} />

                <div className='card-img-overlay d-flex justify-content-center align-items-center flex-column'>
                    <h5 className='card-title'>{props.title}</h5>
                    <p className='card-text'>{props.description}</p>
                    <a
                        href={props.url}
                        className='btn btn-secondary rounded-pill d-inline-block px-3'
                    >
                        View
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
