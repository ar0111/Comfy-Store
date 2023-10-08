import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const links = [
    { id: 1, url: '/', text: 'home' },
    { id: 2, url: 'about', text: 'about' },
    { id: 3, url: 'products', text: 'products' },
    { id: 4, url: 'cart', text: 'cart' },
    { id: 5, url: 'checkout', text: 'checkout' },
];

const NavLinks = () => {
    const {user} = useContext(AuthContext);
    return <>
        {links.map((link)=>{
            const {id, url, text} = link;
            if((url === 'checkout' || url === 'orders') && !user) return null
            return <li key={id}>
                <NavLink className='capitalize' to={url}>
                    {text}
                </NavLink>
            </li>
        })}
    </>
};

export default NavLinks;