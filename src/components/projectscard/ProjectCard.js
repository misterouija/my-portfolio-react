import './ProjectCard.css';
import { RiExternalLinkFill } from 'react-icons/ri';
import { LinkContainer } from 'react-router-bootstrap';

function ProjectCard(props) {
    return (
        <div className='col'>
            <div className='card'>
                <img
                    src={props.img}
                    className='card-img-top'
                    alt={props.title}
                />
                <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <p className='card-text'>{props.sdesc}</p>
                    <a
                        href={props.url}
                        target='_blank'
                        rel='noreferrer'
                        className='btn btn-sm btn-secondary'
                    >
                        App <RiExternalLinkFill />
                    </a>
                    <a
                        href={props.repo}
                        target='_blank'
                        rel='noreferrer'
                        className='btn btn-sm btn-secondary ms-2'
                    >
                        Repo <RiExternalLinkFill />
                    </a>
                    <LinkContainer to={props.title}>
                        <a
                            href={'projects/' + props.title}
                            className='btn btn-sm btn-secondary ms-2'
                        >
                            Details
                        </a>
                    </LinkContainer>
                </div>
            </div>
        </div>
    );
}

function Details(props) {
    return (
        <div className='' style={{ maxWidth: '800px', height: 'auto' }}>
            <div>
                <img
                    src={props.img}
                    className='border p-0 img-fluid'
                    alt={props.title}
                />
            </div>
            <div className=''>
                <h5 className='my-3'>Description</h5>
                <p className='card-text'>{props.desc}</p>

                <h5 className='my-3'>Links</h5>
                <a
                    href={props.url}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-sm btn-secondary'
                >
                    App <RiExternalLinkFill />
                </a>
                <a
                    href={props.repo}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-sm btn-secondary ms-2'
                >
                    Repo <RiExternalLinkFill />
                </a>
            </div>
        </div>
    );
}

export { ProjectCard, Details };
