const UpcomingAssignments = () => {
    // Example data, replace with actual data
    const assignments = [
      { title: 'Math Homework 5', dueDate: '2024-07-30' },
      { title: 'History Essay', dueDate: '2024-08-05' },
      { title: 'Biology Lab Report', dueDate: '2024-08-10' },
    ];
  
    return (
      <div>
        {assignments.map((assignment) => (
          <div key={assignment.title} className="mb-4 p-4 bgbackground rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">{assignment.title}</h3>
            <p className="text-muted-foreground">Due: {assignment.dueDate}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default UpcomingAssignments;
  