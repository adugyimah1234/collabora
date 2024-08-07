import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GroupDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [group, setGroup] = useState<any>(null);

  const url = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchGroupDetails = async () => {
      try {
        const response = await axios.get(`${url}/api/groups/${id}`);
        setGroup(response.data);
      } catch (error) {
        console.error('Failed to fetch group details:', error);
      }
    };

    fetchGroupDetails();
  }, [id]);

  if (!group) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{group.name}</h2>
      <p>{group.description}</p>
      {/* Display members and other details */}
    </div>
  );
};

export default GroupDetails;
