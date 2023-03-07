// Icons
import { TiThMenu } from 'react-icons/ti';
import { Social } from '../social/Social';
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
                        <div className='navbar-nav fs-6 fw-bold gap-md-4'>
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
                    <Social />
                    <button
                        className='navbar-toggler'
                        // type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNavAltMarkup'
                        aria-controls='navbarNavAltMarkup'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <TiThMenu />
                        {/*<span className='navbar-toggler-icon'></span> */}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
