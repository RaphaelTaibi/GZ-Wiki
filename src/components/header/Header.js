import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from '../../context/darkModeContext';
import styles from './Header.module.scss';

function Header() {
    const { darkMode, dispatch } = useContext(DarkModeContext);

    const toggleDarkMode = () => {
        dispatch({type: 'TOGGLE'});
    };

    return (
        <header className={styles.header}>
            <div className={styles.titleAndNav}>
                <h1 className={styles.headerTitle}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Gray Zone Warfare Wiki</Link>
                </h1>
                <nav>
                    <ul>
                        <li><a href="/quests">Quêtes</a></li>
                        <li><a href="/maps">Maps</a></li>
                        <li><a href="/protection">Protections</a></li>
                        <li><a href="/ballistique">Ballistique</a></li>
                    </ul>
                </nav>
            </div>
            <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                onClick={toggleDarkMode}
                className={styles.themeToggleIcon}
            />
        </header>
    );
}

export default Header;
