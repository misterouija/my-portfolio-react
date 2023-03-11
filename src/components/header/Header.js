// Icons
import { TiThMenu } from 'react-icons/ti';
import { Social } from '../social/Social';
import Logo from '../../assets/lg-logo.png';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar navbar-expand-lg bg-light fixed-top py-3 px-2 shadow'>
                <div className='container-fluid d-flex justify-content-between align-items-center'>
                    <div>
                        <LinkContainer to='/'>
                            <a className='navbar-brand' href='/'>
                                <img src={Logo} alt='logo' />
                            </a>
                        </LinkContainer>
                    </div>

                    <div
                        className='collapse navbar-collapse flex-grow-0'
                        id='navbarNavAltMarkup'
                    >
                        <div className='navbar-nav fs-6 fw-bold gap-lg-3 NavLinks'>
                            <LinkContainer to='/'>
                                <a
                                    className='nav-link'
                                    aria-current='page'
                                    href='/'
                                >
                                    Home
                                </a>
                            </LinkContainer>
                            <LinkContainer to='/projects' data-bs-toggle='show'>
                                <a className='nav-link' href='/projects'>
                                    Projects
                                </a>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <a className='nav-link' href='/about'>
                                    About
                                </a>
                            </LinkContainer>
                            <LinkContainer to='/contact'>
                                <a className='nav-link' href='/contact'>
                                    Contact
                                </a>
                            </LinkContainer>
                        </div>
                    </div>

                    <Social />
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNavAltMarkup'
                        aria-controls='navbarNavAltMarkup'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <TiThMenu />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
