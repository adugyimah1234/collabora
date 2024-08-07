// components/ActivityFeed.js
const ActivityFeed = () => {
    const activities = [
      { id: 1, activity: 'Completed Math Assignment', time: '2 hours ago' },
      { id: 2, activity: 'Joined Science Study Group', time: '1 day ago' },
      { id: 3, activity: 'Posted in Literature Discussion', time: '3 days ago' },
    ];
  
    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id} className="mb-2">
              <div className="flex justify-between items-center bg-gray-200 p-2 rounded shadow">
                <span>{activity.activity}</span>
                <span className="text-gray-500 text-sm">{activity.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ActivityFeed;
  