import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

function TwitterWidget() {
    // Liste des ID de tweets à intégrer
    const tweetIds = ["1786428235191914648", "1720093421287899196", "1720093710539772302"];  

    return (
        <div className=''>
            {tweetIds.map(id => (
                <TwitterTweetEmbed key={id} tweetId={id} />
            ))}
        </div>
    );
}

export default TwitterWidget;