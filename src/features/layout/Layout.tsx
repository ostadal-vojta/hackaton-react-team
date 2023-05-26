import { Outlet, useLocation } from "react-router-dom";

const Laoyout = () => {

    const router = useLocation();

    const handleLogout = () => {
        sessionStorage.clear();
    }

    return (
        <>
            <header className="the-header">
                <a href="index.html" className="the-header__logo">
                    <span aria-hidden="true" className="the-header__logo-emblem">3C</span>
                    <span>3 Pillar <strong>Canban</strong></span>
                </a>
                <nav className="the-nav">
                    <ul>
                        <li>
                            <a className="the-nav__item" href="/">Canban</a>
                        </li>
                        <li>
                            <a className="the-nav__item the-nav__item--active" href="/settings">Settings</a>
                        </li>
                        <li>
                            <a className="the-nav__item the-nav__item--logout" href="/login" onClick={handleLogout}>Log Out</a>
                        </li>
                    </ul>
                </nav>

            </header>
            <Outlet />
        </>

    );
}


export default Laoyout;