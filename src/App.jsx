import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskManager from './pages/TaskManager';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<TaskManager />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;