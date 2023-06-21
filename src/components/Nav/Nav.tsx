import { Link } from "react-router-dom";
import { navItems } from "../../utils/navItems";

const Nav = () => {
    return (
        <div>
            {navItems.map(({id, text, href}) => <Link to={href} key={id}>{text}</Link>)}
        </div>
    )
}

export default Nav
