# Task Manager Application

A responsive React application for managing personal and career tasks, built with Vite, Tailwind CSS v4.1, and pnpm. Designed for a 20-25-year-old recent graduate upskilling and applying for jobs, this app helps track personal tasks and career-related goals.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/task-manager-2025.git
   cd task-manager-2025
   ```

2. **Install dependencies**:
   Ensure you have Node.js and pnpm installed.
   Run:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm run dev
   ```

4. Open http://localhost:5173 in your browser to view the app.

**Deployed URL**: [Add URL after deployment, e.g., https://task-manager-2025.vercel.app]

## Screenshots

<img src="images/light-mode.png" alt="Light Mode">
Task Manager in light mode with personal and career tasks visible.

<img src="images/dark-mode.png" alt="Dark Mode">
Task Manager in dark mode, showcasing the theme toggle and task list.

## Features

- **Personal Task Management**: Add, complete, and delete personal tasks with local storage persistence.
- **Task Filtering**: Filter personal tasks by status (All, Active, Completed).
- **Career Task Tracking**: View a predefined list of career tasks (e.g., job applications, upskilling) tailored for a recent graduate.
- **Search Functionality**: Search and filter career tasks by title.
- **Theme Toggle**: Switch between light and dark modes for better usability.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.

## Technologies

- **React**: For building the user interface and managing state.
- **Vite**: For fast development and bundling.
- **Tailwind CSS v4.1**: For styling with utility-first classes.
- **pnpm**: For package management with efficiency.
- **React Router**: For basic routing.
- **Axios**: For mock API integration (simulating career tasks).

## Project Structure

```
task-manager-2025/
├── node_modules/          # (Ignored by .gitignore)
├── dist/                  # (Ignored by .gitignore, build output)
├── src/
│   ├── components/        # Reusable UI components (Button, Card, Navbar, Footer)
│   ├── pages/             # Page components (TaskManager)
│   ├── hooks/             # Custom hooks (useLocalStorage)
│   ├── context/           # Context providers (ThemeContext)
│   ├── api/               # API integration (tasks.js)
│   ├── utils/             # Utility functions (if added)
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point for React
│   └── index.css          # Tailwind CSS directives
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Project dependencies and scripts
├── pnpm-lock.yaml         # pnpm lock file (included for reproducibility)
├── .gitignore             # Ignores node_modules, dist, etc.
└── README.md              # This file
```

## Development Notes

- Commit and push code regularly to track progress.
- Use `pnpm run dev` for local development.
- Deploy to Vercel, Netlify, or GitHub Pages for public access.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Suggestions for new features (e.g., task prioritization, real API integration) are welcome!

