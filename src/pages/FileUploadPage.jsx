import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { uploadMedia } from '../api';

const FileUploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("wait we are uploading");
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail);
    formData.append('video', video);

    try {
      const response = await uploadMedia(formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error uploading media');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Upload Media</h1>
      <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className="block text-gray-700">Title:</label>
        <input
          type="text"
          maxLength="50"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className='mb-4'>
        <label className="block text-gray-700">Description:</label>
        <textarea
          maxLength="200"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Upload Thumbnail:</label>
        <input
          type="file"
          accept="image/jpg,image/png"
          onChange={(e) => setThumbnail(e.target.files[0])}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className='mb-4'>
        <label className="block text-gray-700">Upload Video:</label>
        <input
          type="file"
          accept="video/mp4,video/avi,video/mpg"
          onChange={(e) => setVideo(e.target.files[0])}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <button type="submit"
       className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Upload</button>
       {message  && <p className="mt-4 text-blue-500">{message}</p>}
    </form>
    <button
        onClick={() => navigate('/list')}  // Navigate to list page
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Go to Media List
      </button>
    </div>
  );
}

export default FileUploadPage