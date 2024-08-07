// components/RecentNotifications.js
const RecentNotifications = () => {
    const notifications = [
      { id: 1, message: 'New assignment added in Math', date: '2024-08-01' },
      { id: 2, message: 'Study group meeting tomorrow at 5 PM', date: '2024-08-03' },
      { id: 3, message: 'Assignment due in Science', date: '2024-08-05' },
    ];
  
    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="mb-2">
              <div className="flex justify-between items-center bg-background p-2 rounded shadow">
                <span>{notification.message}</span>
                <span className="text-muted-foreground text-sm">{notification.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentNotifications;
  