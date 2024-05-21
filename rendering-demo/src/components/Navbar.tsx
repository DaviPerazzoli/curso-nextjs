import { NavLinks } from "./NavLinks";
import { NavSearch } from "./NavSearch";

export const NavBar = () => {
    console.log('Navbar rendered');

    return (
        <div>
            <NavLinks />
            <NavSearch />
        </div>
    )
}