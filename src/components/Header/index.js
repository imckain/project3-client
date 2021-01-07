import { Link } from 'react-router-dom';

import styles from './Header.module.css'

function Header(props) {

    return (
        <header className={styles.Header}>
            <Link to="/" className={styles.NavLink}>
                <h1>Project 3</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/login" className={styles.NavLink}>Login</Link>
                    </li>
                    <li>
                        <Link to="" className={styles.NavLink}>Logout</Link>
                    </li>
                    <li>
                        <Link to="/signup" className={styles.NavLink}>Signup</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className={styles.NavLink}>Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;