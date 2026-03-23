import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'delete';
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'solid', 
  isLoading = false,
  children, 
  className, 
  disabled,
  ...props 
}: ButtonProps) => {
  
  const baseStyles = "relative flex items-center justify-center px-6 py-2.5 rounded-lg font-medium transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:pointer-events-none cursor-pointer";

  const variants = {
    solid: "bg-pink-600 text-white hover:bg-pink-700 shadow-sm",
    outline: "border-2 border-pink-600 text-pink-600 hover:bg-pink-50",
    delete: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      disabled={isLoading || disabled}
      {...props}
    >
      {/* The Spinner */}
      {isLoading && (
        <svg 
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {/* Button Text */}
      <span>{isLoading ? 'Loading...' : children}</span>
    </button>
  );
};

export default Button;