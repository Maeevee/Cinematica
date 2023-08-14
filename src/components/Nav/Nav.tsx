import { Link } from "react-router-dom";
import { navItems } from "../../utils/navItems";
import styles from "./Nav.module.css";
import { useEffect, useState } from "react";

const Nav = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener('scroll', onScroll);
    
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`${scrolled ? styles.scrolled : ""} ${styles.navBar}`}>
            <h1 className={styles.logo}>CINEMATICA</h1>
            <nav className={styles.nav}>{navItems.map(({id, text, href}) => <Link to={href} key={id}>{text}</Link>)}</nav>
        </div>
    )
}

export default Nav