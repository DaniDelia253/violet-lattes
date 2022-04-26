import React from "react";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => {
    return (
        <div>
            <Jumbotron>
                <h1>404 Page Not Found</h1>
                <img alt="Oops! This page could not be found!" src="/images/err/404err.jpeg"></img>
            </Jumbotron>
        </div>
    );
};

export default NoMatch;
