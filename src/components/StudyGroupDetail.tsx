import { useEffect, useState } from 'react'; // Removed unused import of React
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Define the types for the group object and schedule events
interface ScheduleEvent {
  date: string;
  topic: string;
}

interface StudyGroup {
  name: string;
  description: string;
  schedule: ScheduleEvent[];
}

const StudyGroupDetail = () => {
  const { id } = useParams<{ id: string }>(); // Add type annotation for useParams
  const [group, setGroup] = useState<StudyGroup | null>(null); // Define state type

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await axios.get(`/api/groups/${id}`);
        setGroup(response.data);
      } catch (error) {
        console.error('Error fetching study group details', error);
      }
    };

    fetchGroup();
  }, [id]);

  if (!group) return <div>Loading...</div>;

  return (
    <motion.div
      className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">{group.name}</h2>
      <p className="text-gray-700 mb-4">{group.description}</p>
      <h3 className="text-xl font-bold mb-2">Schedule</h3>
      <ul className="list-disc list-inside">
        {group.schedule.map((event: ScheduleEvent, index: number) => (
          <li key={index}>
            {event.date}: {event.topic}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default StudyGroupDetail;
