import React from 'react';

const VideoEmbed = ({ videoId }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div className="video-embed-container">
            <iframe className='iframe'
                src={embedUrl}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Embedded YouTube Video"
            ></iframe>
        </div>
    );
};

export default VideoEmbed;
