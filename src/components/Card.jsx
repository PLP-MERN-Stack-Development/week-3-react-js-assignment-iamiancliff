// Reusable Card component for boxed content
function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow rounded-lg p-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;