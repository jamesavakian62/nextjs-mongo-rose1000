import Link from 'next/link';

import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
        <h1 className={styles.padding}>Optical Automation, ToDo MongoDB</h1>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/add-post">
                        <a>Add post</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}