import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import styles from './Header.module.scss';

function Header() {
    const  { dispatch } = useContext(DarkModeContext);

    const toggleDarkMode = () => {
        dispatch({type: 'TOGGLE'});
    }
    return (
        <header className={styles.header}>
            <Link to="/">
                <h1 className='header-title '>Gray Zone Warfare Wiki</h1>
            </Link>
            <div>
                <button
                    className={styles.themeToggleBtn}
                    onClick={toggleDarkMode}
                >
                </button>
            </div>
            <nav>
                <ul>
                    <li><Link to="/quests">Quêtes</Link></li>
                    <li><Link to="/maps">Maps</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
