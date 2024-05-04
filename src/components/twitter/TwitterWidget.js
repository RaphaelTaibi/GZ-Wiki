import React, { useEffect } from 'react';

const TwitterWidget = ({ username }) => {
    useEffect(() => {
        if(!document.getElementById('twitter-wjs')) {
            const script = document.createElement('script');
            script.id = 'twitter-wjs';
            script.src = "https://platform.twitter.com/widget.js";
            script.async= true;
            document.body.appendChild(script);
        }
        
    }, []);

    return (
        <a className='' href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}>Tweets by {username}</a>
    );
}

export default TwitterWidget;