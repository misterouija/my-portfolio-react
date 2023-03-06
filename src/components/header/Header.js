// Icons
import {
    BsLinkedin,
    BsGithub,
    BsPhoneFill,
    BsEnvelopeFill,
} from 'react-icons/bs';
const Header = () => {
    return (
        <header className=''>
            <nav className='navbar navbar-expand-lg bg-light fixed-top py-3 shadow'>
                <div className='container-fluid d-flex justify-content-between align-items-center'>
                    <div>
                        <a className='navbar-brand' href='/'>
                            Navbar
                        </a>
                    </div>

                    <div
                        className='collapse navbar-collapse flex-grow-0'
                        id='navbarNavAltMarkup'
                    >
                        <div className='navbar-nav fs-6 fw-bold gap-4'>
                            <a
                                className='nav-link active'
                                aria-current='page'
                                href='/'
                            >
                                Home
                            </a>
                            <a className='nav-link' href='about'>
                                About
                            </a>
                            <a className='nav-link' href='projects'>
                                Projects
                            </a>
                            <a className='nav-link' href='contact'>
                                Contact
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className='social-links  d-inline-flex gap-2'>
                            <a href='github'>
                                <BsGithub />
                            </a>
                            <a href='linkedin'>
                                <BsLinkedin />
                            </a>
                            <a href='email'>
                                <BsEnvelopeFill />
                            </a>
                            <a href='phone'>
                                <BsPhoneFill />
                            </a>
                        </div>

                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarNavAltMarkup'
                            aria-controls='navbarNavAltMarkup'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
