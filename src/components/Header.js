const Header = () => {
    return (
        <header className='mb-auto'>
            <div>
                <h3 className='float-md-start mb-0'>Cover</h3>
                <nav className='nav nav-masthead justify-content-center float-md-end'>
                    <a
                        className='nav-link active'
                        aria-current='page'
                        href='home'
                    >
                        Home
                    </a>
                    <a className='nav-link' href='features'>
                        Features
                    </a>
                    <a className='nav-link' href='contact'>
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
