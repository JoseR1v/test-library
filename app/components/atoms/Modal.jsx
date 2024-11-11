import React from 'react';
import Button from './Button';

const Modal = ({ children, buttonLabel, onButtonClick }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-12 w-1/2 max-lg:w-5/6 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center gap-6">{children}</div>
        <div className="mt-12">
          <Button variant="secondary" onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
