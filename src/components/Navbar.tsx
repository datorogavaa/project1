
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css'

export default () => {
    return (
        <ul className="nav">
            <li className={`nav-item ${styles.navbar}`}>
                <a className="nav-link active" aria-current="page" type='button'>Home</a>
            </li>
            <li className={`nav-item ${styles.navbar}`}>
                <a className="nav-link active" aria-current="page" type='button'>Products</a>
            </li>
            <li className={`nav-item ${styles.navbar}`}>
                <a className="nav-link" type='button'>Contact</a>
            </li>
            <li className={`nav-item ${styles.navbar}`}>
                <a className="nav-link" type='button'>About</a>
            </li>
        </ul>
    )
}