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
                <div>
                    <p>
                        hi there, {getName()}!
                        <span id='dropdownIcon'>
                            <img src='/images/icons/dropdown.svg' alt='dropdown menu'></img>
                        </span>
                    </p>
                    <ul className="flex-row">
                        <li className="mx-1">
                            <Link to="/orderHistory">
                                Order History
                            </Link>
                        </li>
                        <li className="mx-1">
                            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                            <a href="/" onClick={() => Auth.logout()}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/login">
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
