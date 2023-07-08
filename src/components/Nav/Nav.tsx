import { Link } from "react-router-dom";
import { navItems } from "../../utils/navItems";
import styles from "./Nav.module.css";
import { useEffect, useState } from "react";

const Nav = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener('scroll', onScroll);
    
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`${scrolled ? styles.scrolled : ""} flex justify-between transition ease-in-out p-5 text-3xl fixed w-full `}>
            <h1 className={`${styles.logo} text-4xl`}>Cinematica</h1>
            <nav className={`flex space-x-10 text-2xl ${styles.nav}`}>{navItems.map(({id, text, href}) => <Link to={href} key={id}>{text}</Link>)}</nav>
        </div>
    )
}

export default Nav