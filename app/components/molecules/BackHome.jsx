"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Button from '../atoms/Button';

const Back = ({route, icon}) => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push(`${route}`);
  };

  return (
    <Button icon={icon} onClick={handleGoHome} variant="outline">
      Volver
    </Button>
  );
};

export default Back;
