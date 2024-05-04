import React from 'react';
import TwitterWidget from '../twitter/TwitterWidget';
import VideoEmbed from '../vidéo/VideoEmbed';


function Article() {
    const videoIds = ['eQ9qT8rkxMM','I8DyVR3bPG8' ];
    return (
        <div className='container'>
            <div className='video-column'>
            {videoIds.map(id => (
                <div key={id} className='video-wrapper'>
                    <VideoEmbed videoId={id} />
                </div>
            ))}
            </div>
            <div className='twitter-feed'>
                <TwitterWidget />
            </div>
        </div>
    );
}

export default Article;
