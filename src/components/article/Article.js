import React from 'react';
import LastestVideos from '../vidéo/LastestVideo';
import TwitterWidget from '../twitter/TwitterWidget';

function Article() {
    return (
        <div className='container'>
            <div className='video-column'>
                <LastestVideos />
            </div>
            <div className='twitter-feed'>
                <TwitterWidget username="MADFINGERGames" />
            </div>
        </div>
    );
}

export default Article;
