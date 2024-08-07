import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // Adjust the import path as necessary

interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string; // Assuming dates are stored as strings
  description: string;
}

interface AssignmentCardProps {
  assignment: Assignment;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{assignment.title}</CardTitle>
        <CardDescription>
          <p className="text-gray-600">Course: {assignment.course}</p>
          <p className="text-gray-800">Due Date: {new Date(assignment.dueDate).toLocaleDateString()}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          to={`/assignments/${assignment.id}`}
          className="text-indigo-600 hover:underline"
        >
          View Details
        </Link>
      </CardContent>
    </Card>
  );
};

export default AssignmentCard;
