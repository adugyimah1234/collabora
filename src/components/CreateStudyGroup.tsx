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
  const [courseId, setCourseId] = useState(1);
  const [currentActivity, setCurrentActivity] = useState('studying');
  const [createdAt, setCreatedAt] = useState(new Date().toISOString());
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = JSON.stringify({
      name,
      description,
      course_id: courseId,
      current_activity: currentActivity,
      created_at: createdAt,
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/api/study-groups/create-group',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vcnJpczEyQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzIyODgwMDE4LCJleHAiOjE3MjI4ODM2MTh9.bXkLkKH5N5izBcAEbX3vtckvL_eDFa3Cuxx_4jSdImQ', 
        'Content-Type': 'application/json'
      },
      data,
    };

    try {
      const response = await axios.request(config);
      setSuccess('Study group created successfully!');
      setError('');
      console.log(JSON.stringify(response.data));
      const groupId = response.data.group_id; // Adjust based on your API response
      navigate(`/groupchat/${groupId}`);
    } catch (error) {
      setError('Error creating study group');
      setSuccess('');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create Study Group</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <Label>
            Name:
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </Label>
        </div>
        <div>
          <Label>
            Description:
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Label>
        </div>
        <Button type="submit">Create Study Group</Button>
      </form>
    </div>
  );
};

export default CreateStudyGroup;
