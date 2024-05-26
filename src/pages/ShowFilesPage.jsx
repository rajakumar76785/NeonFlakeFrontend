import { fetchMediaList } from '../api';
import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';


const ShowFilesPage = () => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const getMediaList = async () => {
      try {
        const response = await fetchMediaList();
        setMediaList(response.data.files);
      } catch (error) {
        console.error('Error fetching media list', error);
      }
    };

    getMediaList();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Media List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaList.map((media) => (
          <div key={media._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/video/${media._id}`}>
              <img src={media.thumbnailUrl} alt={media.title} className="w-full" />
            </Link>
            <h3 className="text-center bg-blue-500 text-white py-2">
              <Link to={`/video/${media._id}`} className="hover:underline">{media.title}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowFilesPage;