import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateStudyGroup: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !description) {
      setError("Please fill in all required fields.");
      return;
    }

    const data = {
      name,
      description,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/study-groups/create-group', data, {
        headers: {
          'Authorization': `Bearer ${process.env.VITE_APP_API_TOKEN}`, // Replace with actual token
          'Content-Type': 'application/json',
        },
      });

      setSuccess('Study group created successfully!');
      setError(null);
      const groupId = response.data.study_group_id; // Adjust based on your API response
      navigate(`/groupchat/${groupId}`);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Error creating study group');
      setSuccess(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-card-foreground">Create Study Group</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Create Study Group
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateStudyGroup;
