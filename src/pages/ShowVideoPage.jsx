import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMediaById } from '../api';

const ShowVideoPage = () => {
  const { id } = useParams();
  const [ video, setVideo] = useState(null);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const response = await fetchMediaById(id);
        setVideo(response.data);
      } catch (error) {
        console.error('Error while fetching media', error);
      }
    };

    getVideo();
  }, [id]);

  if (!video) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
      <p className="text-gray-700 mb-4">{video.description}</p>
      <div className="video-player">
        <video controls autoPlay className="w-full rounded">
          <source src={video.videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default ShowVideoPage