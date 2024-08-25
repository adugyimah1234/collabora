import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface CreateEventModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  eventDate: Date | null;
  setEventDate: React.Dispatch<React.SetStateAction<Date | null>>;
  handleEventCreation: () => void;
}

const CreateEventModal: React.FC<CreateEventModalProps> = ({
  showModal,
  setShowModal,
  eventDate,
  setEventDate,
  handleEventCreation
}) => {
  if (!showModal) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        exit={{ y: -200 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-xl font-semibold mb-4">Create Event</h2>
        <div className="mb-4">
          <label htmlFor="event-date" className="block text-sm font-medium text-gray-700">
            Event Date
          </label>
          <input
            type="date"
            id="event-date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            value={eventDate ? eventDate.toISOString().substr(0, 10) : ''}
            onChange={(e) => setEventDate(new Date(e.target.value))}
          />
        </div>
        <Button onClick={handleEventCreation} className="mt-4">
          Create
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CreateEventModal;