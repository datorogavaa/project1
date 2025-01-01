
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css'
import Link from 'next/link'; 
export default () => {
    return (
        <ul className="nav">
            <li className={`nav-item ${styles.navbar}`}>
                <Link href="/" className="nav-link active" aria-current="page" type='button'>Home</Link>
            </li>
            <li className={`nav-item ${styles.navbar}`}>
                <Link href="/products" className="nav-link active" aria-current="page" type='button'>Products</Link>
            </li>
            <li className={`nav-item ${styles.navbar}`}>
                <Link  href="/" className="nav-link" type='button'>Contact</Link>
            </li>
            <li className={`nav-item ${styles.navbar}`}>
                <Link href="/about" className="nav-link" type='button'>About</Link>
            </li>
        </ul>
    )
}