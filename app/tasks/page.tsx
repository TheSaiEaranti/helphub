'use client';

import { useEffect, useState } from 'react';

interface Task {
  taskId: string;
  title: string;
  description: string;
  createdAt: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://vslto45q0g.execute-api.us-east-2.amazonaws.com/dev/helphub-get-tasks');
        const data = await response.json();
        setTasks(data.tasks || []);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Available Help Requests</h1>

      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p className="text-gray-500">No tasks posted yet.</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.taskId} className="border rounded-lg shadow p-4 bg-white">
              <h2 className="text-xl font-semibold text-black">{task.title}</h2>
              <p className="text-gray-700 mt-1">{task.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Posted on {new Date(task.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

