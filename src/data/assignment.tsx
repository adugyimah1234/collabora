 // Define the type for Assignment
interface Assignment {
    id: number;
    title: string;
    course: string;
    dueDate: string; // Assuming dates are stored as strings
    description: string;
  }
  
  // Mock data or replace with actual API data
  export const assignmentsData: Assignment[] = [
    {
      id: 1,
      title: 'Assignment 1',
      course: 'Course 1',
      dueDate: '2024-08-15',
      description: 'Description for assignment 1.',
    },
    // Add more assignments here...
  ];
  