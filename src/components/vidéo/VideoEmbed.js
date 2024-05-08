import React from 'react';

const VideoEmbed = ({ videoId }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="w-full aspect-video overflow-hidden">
            <iframe 
                className="w-full h-full"
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
            ></iframe>
        </div>
    );
};

export default VideoEmbed
