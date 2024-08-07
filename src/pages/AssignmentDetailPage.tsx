import React from 'react';
import { useParams } from 'react-router-dom';
import { assignmentsData } from '../data/assignment'; // Adjust the path as necessary
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'; // Adjust the import path as necessary

// Define the type for Assignment
interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string; // Assuming dates are stored as strings
  description: string;
}

const AssignmentDetailPage: React.FC = () => {
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const assignment = assignmentsData.find(a => a.id === parseInt(assignmentId));

  if (!assignment) {
    return <div className="p-6">Assignment not found</div>;
  }

  return (
    <div className="p-6 bg-background min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>{assignment.title}</CardTitle>
          <CardDescription>
            <p className="text-gray-600">Course: {assignment.course}</p>
            <p className="text-gray-800">Due Date: {new Date(assignment.dueDate).toLocaleDateString()}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{assignment.description}</p>
        </CardContent>
        <CardFooter>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Mark as Complete
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AssignmentDetailPage;
