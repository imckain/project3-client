import { Link } from 'react-router-dom';

import styles from './Header.module.css'

import Logo from './images/logo1.png'

function Header(props) {

    return (
        <header className={styles.Header}>
            <Link to="/" className={styles.NavLink}>
                <img className={styles.Logo} src={Logo} />
            </Link>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li>
                                <Link to="/dashboard" className={styles.NavLinkDashboard}>Dashboard</Link>
                            </li>
                            <li>
                                <Link to="" onClick={props.handleLogout} className={styles.NavLinkLogout}>Logout</Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to="/login" className={styles.NavLinkLogin}>Login</Link>
                            </li>
                            <li>
                                <Link to="/signup" className={styles.NavLinkSignup}>Sign up</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;