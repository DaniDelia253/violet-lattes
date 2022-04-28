import React from "react";

const AboutTheArtist = () => {
    return (
        <div>
            <h1 className='pageTitle'>about the artist:</h1>
            <div id='aboutContainer'>
                <img className="aboutImg" alt="Self portrait" src="/images/about/about.png"></img>
                <div id='aboutTextContainer'>
                    <h2>kirsten michelle</h2>
                    <div id='aboutTextLine'>
                        <p><span className='aboutIcon'>🪴</span>texan, coffee lover, 24</p>
                    </div>
                    <div id='aboutTextLine'>
                        <p><span className='aboutIcon'>⭐️</span>digital illustration & character design</p>
                    </div>
                    <div id='aboutTextLine'>
                        <p><span className='aboutIcon'>📸</span>instagram: <a id='instaLink' href='https://www.instagram.com/violetlattes/' target='_blank' rel="noreferrer">@violetlattes</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTheArtist;
