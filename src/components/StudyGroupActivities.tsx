const StudyGroupActivities = () => {
    // Example data, replace with actual data
    const activities = [
      { group: 'Math Study Group', activity: 'Weekly Meeting', date: '2024-07-28' },
      { group: 'History Study Group', activity: 'Discussion Forum', date: '2024-07-30' },
    ];
  
    return (
      <div>
        {activities.map((activity) => (
          <div key={activity.group} className="mb-4 p-4 bg-background rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">{activity.group}</h3>
            <p className="text-muted-foreground">{activity.activity} on {activity.date}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default StudyGroupActivities;
  