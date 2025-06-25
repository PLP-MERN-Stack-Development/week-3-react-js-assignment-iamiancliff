// src/api/tasks.js
const mockTasks = [
  {
    id: 1,
    title: "Update Resume with Latest Internship Experience",
    assignee: "You",
    dueDate: "2025-07-01",
    status: "In Progress",
    priority: "High",
  },
  {
    id: 2,
    title: "Complete AWS Solutions Architect Practice Exam",
    assignee: "You",
    dueDate: "2025-06-30",
    status: "Not Started",
    priority: "High",
  },
  {
    id: 3,
    title: "Apply to 5 Entry-Level Software Developer Jobs",
    assignee: "You",
    dueDate: "2025-07-02",
    status: "Not Started",
    priority: "Medium",
  },
  {
    id: 4,
    title: "Attend Virtual Networking Event for Tech Jobs",
    assignee: "You",
    dueDate: "2025-07-04",
    status: "Not Started",
    priority: "Medium",
  },
  {
    id: 5,
    title: "Build a Portfolio Project with React",
    assignee: "You",
    dueDate: "2025-07-06",
    status: "In Progress",
    priority: "Low",
  },
    {
        id: 6,
        title: "Prepare for Technical Interview with Mock Questions",
        assignee: "You",
        dueDate: "2025-07-05",
        status: "Not Started",
        priority: "High",
    },
    {
        id: 7,
        title: "Research Companies for Software Development Roles",
        assignee: "You",
        dueDate: "2025-07-03",
        status: "In Progress",
        priority: "Medium",
    },
    {
        id: 8,
        title: "Follow Up on Job Applications Sent Last Week",
        assignee: "You",
        dueDate: "2025-07-07",
        status: "Not Started",
        priority: "Low",
    },
];

// Mock function to simulate API call
export const fetchTasks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTasks), 500); // Simulate network delay
  });
};