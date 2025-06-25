import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';
import { fetchTasks } from '../api/tasks';


function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [apiTasks, setApiTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search

  // Fetch mock API tasks on mount
  useEffect(() => {
    setLoading(true);
    fetchTasks()
      .then((data) => {
        setApiTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch API tasks');
        setLoading(false);
      });
  }, []);

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  // Filter API tasks based on search term
  const filteredApiTasks = apiTasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Manage Your Tasks</h2>

      {/* Task Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <Button onClick={addTask}>Add Task</Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2">
        <Button
          onClick={() => setFilter('all')}
          variant={filter === 'all' ? 'primary' : 'secondary'}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter('active')}
          variant={filter === 'active' ? 'primary' : 'secondary'}
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter('completed')}
          variant={filter === 'completed' ? 'primary' : 'secondary'}
        >
          Completed
        </Button>
      </div>

      {/* User Tasks List */}
      <div className="space-y-2">
        {filteredTasks.map((task) => (
          <Card key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
            </div>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </Card>
        ))}
      </div>

      {/* API Tasks */}
      <h2 className="text-2xl font-bold mt-6">Your Career Tasks</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
        className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-white"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredApiTasks.map((task) => (
          <Card key={task.id}>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Due: {task.dueDate} | Status: {task.status} | Priority: {task.priority}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TaskManager;