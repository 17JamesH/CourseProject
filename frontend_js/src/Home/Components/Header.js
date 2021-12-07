import React from "react";

const Header = () =>{
    return(
        <>
            <div className="container">
                <nav className="nav">
                    <a className="logo" href={"/"}>
                        <img src={'../../../images/logo.jpg'} alt={""}/>
                    </a>
                    <div className="hamburger-menu">
                        <i className="fas fa-bars"></i>
                        <i className="fas fa-times"></i>
                    </div>
                    {/*<ul className="nav-list">*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <a className="nav-link" href={"/"}>Home</a>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <a className="nav-link" href={"/"}>About</a>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <a className="nav-link" href={"/"}>Search</a>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <a className="nav-link" href={"/"}>New</a>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <a className="nav-link" href={"/"}>Contact</a>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}

                </nav>
            </div>
        </>
    );
}

export default Header;



