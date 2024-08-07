const CourseProgress = () => {
    // Example data, replace with actual data
    const courses = [
      { name: 'Math 101', progress: 75 },
      { name: 'History 202', progress: 50 },
      { name: 'Biology 303', progress: 80 },
    ];
  
    return (
      <div>
        {courses.map((course) => (
          <div key={course.name} className="mb-4">
            <h3 className="font-semibold text-lg">{course.name}</h3>
            <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                style={{ width: `${course.progress}%` }}
                className="bg-blue-500 h-full"
              />
            </div>
            <p className="text-muted-foreground">{course.progress}% completed</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CourseProgress;
  