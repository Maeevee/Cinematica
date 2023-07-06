import { Link } from "react-router-dom";
import { navItems } from "../../utils/navItems";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={`flex justify-between p-5 text-3xl fixed w-screen`}>
            <h1 className={`${styles.logo} text-4xl`}>Cinematica</h1>
            <nav className={`flex space-x-10 text-2xl ${styles.nav}`}>{navItems.map(({id, text, href}) => <Link to={href} key={id}>{text}</Link>)}</nav>
        </div>
    )
}

export default Nav