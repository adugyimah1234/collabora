import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const CreateStudyGroup: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [courseId, setCourseId] = useState(1);
  const [currentActivity, setCurrentActivity] = useState("studying");
  const [createdAt] = useState(new Date().toISOString());
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/api/study-groups/create-group",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vcnJpczEyQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzIyODgwMDE4LCJleHAiOjE3MjI4ODM2MTh9.bXkLkKH5N5izBcAEbX3vtckvL_eDFa3Cuxx_4jSdImQ",
        "Content-Type": "application/json",
      },
      data,
    };

    try {
      const response = await axios.request(config);
      setSuccess("Study group created successfully!");
      setError("");
      console.log(JSON.stringify(response.data));
      const groupId = response.data.group_id; // Adjust based on your API response
      navigate(`/groupchat/${groupId}`);
    } catch (error) {
      setError("Error creating study group");
      setSuccess("");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Create Study Group</CardTitle>
          <CardDescription>
            Fill in the details to create a new study group.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name of the study group"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of the study group"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create Group</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateStudyGroup;
