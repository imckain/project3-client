import styles from './Footer.module.css'

const Footer = (props) => (
    <footer className={styles.Footer}>
        <p>Copyright &copy; All rights reserved {new Date().getFullYear()} Project 3</p>
    </footer>
)

export default Footer;