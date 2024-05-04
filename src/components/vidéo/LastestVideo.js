import React, { useState, useEffect } from "react";
import axios from 'axios';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
const CHANNEL_ID = 'UCqSNM6HkOfv8JdGXniY2Pcw';

function LastestVideos() {
    const [ videos, setVideos ] = useState([]);

    useEffect(() =>{
        const fetchVideos = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                  params: {
                    key: YOUTUBE_API_KEY,
                    channelId: CHANNEL_ID,
                    part: 'snippet',
                    q: 'Gray Zone Warfare',
                    order: 'date',
                    maxResults: 3, 
                    type: 'video',
                  }  
                });
                setVideos(response.data.items);
            } catch(error) {
                console.error('Error fetching video', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="videos">
          <h2>Dernières Vidéos de Madfinger Games</h2>
          <ul>
            {videos.map(video => (
              <li key={video.id.videoId}>
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                  <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                </a>
                <p>{video.snippet.title}</p>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default LastestVideos;