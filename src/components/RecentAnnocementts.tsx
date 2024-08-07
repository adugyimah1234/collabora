const RecentAnnouncements = () => {
    // Example data, replace with actual data
    const announcements = [
      { title: 'Exam Schedule Updated', date: '2024-07-20' },
      { title: 'New Course Available: Computer Science 101', date: '2024-07-22' },
    ];
  
    return (
      <div>
        {announcements.map((announcement) => (
          <div key={announcement.title} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">{announcement.title}</h3>
            <p className="text-gray-600">Date: {announcement.date}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default RecentAnnouncements;
  