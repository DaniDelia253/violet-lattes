import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function UserInfo() {

    function showUserInfo() {

        if (Auth.loggedIn()) {
            function getName() {

                const profile = Auth.getProfile()
                console.log(profile)
                return profile.data.firstName
            }
            return (
                <div className='dropdown'>
                    <p className="userinfotext" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        hi there, {getName()}!
                        <span id='dropdownIcon'>
                            <img src='/images/icons/dropdown.svg' alt='dropdown menu'></img>
                        </span>
                    </p>
                    <ul className="flex-row dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {/* <li className="userinfotext dropdown-item">
                            <Link className='userinfotext' to="/orderHistory">
                                Order History
                            </Link>
                        </li> */}
                        <li className="userinfotext dropdown-item">
                            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                            <a className='userinfotext' href="/" onClick={() => Auth.logout()}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return (
                <ul className="flex-row userInfoLI">
                    <li className="userInfoLIitem">
                        <Link className='userinfotext' to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li className="userInfoLIitem">
                        <Link className='userinfotext' to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            );
        }
    }
    return (
        <div>
            {showUserInfo()}
        </div>
    )
}




export default UserInfo;
