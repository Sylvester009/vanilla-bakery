import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'delete';
  isLoading?: boolean;
  icon?: LucideIcon
  iconPosition?: "left" | "right";
  iconSize?: number;
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'solid', 
  isLoading = false,
  icon: Icon,
  iconPosition ='left',
  iconSize= 18,
  children, 
  className, 
  disabled,
  ...props 
}: ButtonProps) => {
  
  const baseStyles = "relative flex items-center gap-2 justify-center px-6 py-2.5 rounded-lg font-medium transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:pointer-events-none cursor-pointer";

  const variants = {
    solid: "bg-pink-700 text-white hover:bg-pink-800 shadow-sm",
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
     {isLoading ? (
        <div className="flex items-center gap-2">
           <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>loading...</span>
        </div>
      ) : (
        <>
          {/* Render Icon on the Left */}
          {Icon && iconPosition === 'left' && <Icon size={iconSize} strokeWidth={2} />}
          
          <span>{children}</span>

          {/* Render Icon on the Right */}
          {Icon && iconPosition === 'right' && <Icon size={iconSize} strokeWidth={2.5} />}
        </>
      )}
    </button>
  );
};

export default Button;