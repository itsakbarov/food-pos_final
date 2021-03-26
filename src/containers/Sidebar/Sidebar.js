import "./main.css"
import { Link } from "react-router-dom"
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7 } from "../../assets/icon/icon"
import SidebarIcon from "../../components/SidebarIcon/SIdebarIcon"
import { useState } from "react"
import Logo from "../../assets/images/Vector.svg"


const Sidebar = () => {
    const [activePage, setActivePage] = useState("/")

    return (
        <div>


            <div className="sidebar">

                <Link to="/"
                    className={`header-link Logo-header ${activePage === '/home' ? 'active' : ''}`}
                    onClick={() => setActivePage("/")}
                > <span className="logo"><img src={Logo} alt="" /></span> </Link>

                <Link to="/"
                    className={`header-link ${activePage === '/' ? 'active' : ''}`}
                    onClick={() => setActivePage("/")}
                > <SidebarIcon icon={<Icon1 />} /></Link>

                <Link to="/one"
                    className={`header-link ${activePage === '/one' ? 'active' : ''}`}
                    onClick={() => setActivePage("/one")}
                > <SidebarIcon icon={<Icon2 />} /></Link>

                <Link to="/dashboard"
                    className={`header-link ${activePage === '/dashboard' ? 'active' : ''}`}
                    onClick={() => setActivePage("/dashboard")}
                >  <SidebarIcon icon={<Icon3 />} /></Link>

                <Link to="/two"
                    className={`header-link ${activePage === '/two' ? 'active' : ''}`}
                    onClick={() => setActivePage("/two")}
                >  <SidebarIcon icon={<Icon4 />} /></Link>

                <Link to="/three"
                    className={`header-link ${activePage === '/three' ? 'active' : ''}`}
                    onClick={() => setActivePage("/three")}
                >  <SidebarIcon icon={<Icon5 />} /></Link>

                <Link to="/settings"
                    className={`header-link ${activePage === '/settings' ? 'active' : ''}`}
                    onClick={() => setActivePage("/settings")}
                >  <SidebarIcon icon={<Icon6 />} /></Link>

                <Link to="/four"
                    className={` last header-link  ${activePage === '/four' ? 'active' : ''}`}
                    onClick={() => setActivePage("/four")}
                >  <SidebarIcon icon={<Icon7 />} /></Link>
            </div>

        </div>
    );
};



export default Sidebar;