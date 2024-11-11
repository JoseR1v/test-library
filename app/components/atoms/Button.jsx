import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from "../atoms/Spinner";

const Button = ({
    variant = 'primary',
    disabled,
    children,
    className,
    icon,
    isLoading,
    iconSize,
    onClick,
    type
}) => {

    const variants = {
        primary: 'bg-primary',
        secondary: 'bg-secondary text-white',
        outline: 'bg-tranparent shadow-none border border-secondary'
    }
  return (
    <>
        <button 
            className={`
                ${className}
                ${variants[variant]}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
                ${children ? 'rounded-md py-3 px-8' : 'rounded-full w-12 h-12'} 
                focus:outline-none shadow-md font-medium flex justify-center items-center
            `}   
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {children}
                    {icon && (
                        <FontAwesomeIcon
                            className={`${iconSize ? iconSize : 'w-6'} ${children && 'ml-4'}`}
                            icon={icon}
                        />
                    )}
                </>
            )}
        </button>
    </>
  )
}

export default Button