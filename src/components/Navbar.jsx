import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

// Navbar component with theme toggle
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-500 dark:bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Task Manager</h1>
        <Button
          onClick={toggleTheme}
          className={`${
            theme === 'light'
              ? 'bg-white text-blue-500 hover:bg-gray-200' // White button with blue text in light mode
              : 'bg-gray-700 text-white hover:bg-gray-600' // Darker button in dark mode
          } px-4 py-2 rounded font-semibold focus:outline-none`}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;