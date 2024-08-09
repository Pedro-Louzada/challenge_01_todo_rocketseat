import styles from './Header.module.css';

import Logo from '../../assets/todo_logo.svg';

export function Header() {
    return (
        <header className={styles.logo}>
            <img src={Logo} alt="Logo TODO Rocketseat" />
        </header>
    )
}