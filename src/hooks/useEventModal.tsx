import { useState } from 'react';

const useEventModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [eventDate, setEventDate] = useState<Date | null>(null);

  const handleEventCreation = () => {
    if (eventDate) {
      // Handle the event creation logic here, such as sending data to the server
      console.log('Event created for date:', eventDate);
      setShowModal(false); // Close the modal after creation
    }
  };

  return {
    showModal,
    setShowModal,
    eventDate,
    setEventDate,
    handleEventCreation,
  };
};

export default useEventModal;