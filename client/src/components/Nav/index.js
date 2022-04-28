import React from "react";
import { NavLink } from "react-router-dom";


function Nav() {


    return (
        <div>
            <header className="flex-row header">
                <NavLink className='navLink' to='/'>
                    <h1>
                        violetlattes
                    </h1>
                </NavLink>
                <nav>
                    <NavLink className='navLink' to='/'>
                        <div className='navBtn'>
                            buy my work
                        </div>
                    </NavLink>

                    <NavLink className='navLink' to='/commissions'>
                        <div className='navBtn'>
                            commissions
                        </div>
                    </NavLink>
                    <NavLink className='navLink' to='/about'>
                        <div className='navBtn'>
                            about the artist
                        </div>
                    </NavLink>
                    <div className='navBtn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <span id='cartIcon'>🛒</span>
                    </div>
                </nav>
            </header>

            <div id="underNav"></div>
        </div>
    );
}

export default Nav;
