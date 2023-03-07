import {
    BsLinkedin,
    BsGithub,
    BsPhoneFill,
    BsEnvelopeFill,
} from 'react-icons/bs';
import './Social.css';

function Social() {
    return (
        <div>
            <div className='social-links  d-inline-flex gap-2'>
                <a href='https://github.com/misterouija/'>
                    <BsGithub />
                </a>
                <a href='https://www.linkedin.com/in/leighton-grant-009483116/'>
                    <BsLinkedin />
                </a>
                <a href='mailto:oneal.grant@outlook.com'>
                    <BsEnvelopeFill />
                </a>
                <a href='tel:07886028826'>
                    <BsPhoneFill />
                </a>
            </div>
        </div>
    );
}

function LinkedIn() {
    return (
        <a
            href='https://www.linkedin.com/in/leighton-grant-009483116/'
            className='social-button'
        >
            <BsLinkedin />
        </a>
    );
}

function GitHub() {
    return (
        <a href='https://github.com/misterouija/' className='social-button'>
            <BsGithub />
        </a>
    );
}

export { Social, LinkedIn, GitHub };
