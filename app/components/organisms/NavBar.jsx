"use client";

import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Modal from '../atoms/Modal';
import Spinner from '../atoms/Spinner';
import { faArrowRightFromBracket, faArrowRightLong, faBookBookmark, faChevronDown, faPenToSquare, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [userData, setUserData] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const isHomePage = pathname === '/';
  
  const loadUserData = () => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      setUserData(null); 
    }
  };

  
  useEffect(() => {
    loadUserData();
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleViewProfile = () => {
    setIsMenuOpen(false);
    handleOpenModal();
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    localStorage.removeItem("userData");
    setUserData(null);
    router.push("/");
  };

  return (
    <div className='w-full flex justify-between items-center mb-16 pr-8'>
      <Link href="/" >
        <div className='flex gap-6 items-center cursor-pointer'>
          <h1 className='text-4xl font-bold max-lg:text-2xl'>
            Book <span className='text-primary'>Search</span>
          </h1>
          <FontAwesomeIcon className='h-10 max-lg:h-7' icon={faBookBookmark} />
        </div>
      </Link>

      {userData ? (
        <div className='flex gap-6 items-center'>
          <div className='flex flex-col items-end max-lg:hidden'>
            <p className={`${isHomePage && 'text-primary'} font-semibold`}>
              {userData.nombres} {userData.apellidos}
            </p>
            <p className={isHomePage ? 'text-white' : ''}>{userData.email}</p>
          </div>
          <FontAwesomeIcon 
            className={`${isHomePage ? 'text-white' : ''} max-lg:text-secondary h-7`} 
            icon={faChevronDown} 
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div className="absolute right-28 top-12 mt-12 bg-white shadow-lg rounded-lg p-2 w-48">
              <Button
                className='border-none hover:bg-secondary-100'
                variant='outline'
                icon={faUser}
                onClick={handleViewProfile}
              >
                Ver Perfil
              </Button>
              <Button
                className='text-red border-none hover:bg-red-100 w-full'
                variant='outline'
                icon={faArrowRightFromBracket}
                onClick={handleLogout}
              >
                Salir
              </Button>
            </div>
          )}
        </div>
      ) : (
        <>
          <Button 
            className="bg-[#425f55] max-lg:hidden" 
            variant='secondary' 
            icon={faArrowRightLong} 
            onClick={() => router.push("/pages/register")}
          >
            Registrarse
          </Button>
          <Button 
            className="lg:hidden" 
            variant='secondary' 
            icon={faPenToSquare} 
            onClick={() => router.push("/pages/register")}
          />
        </>
      )}
      
      {openModal && (
        <Modal buttonLabel="Cerrar" onButtonClick={handleCloseModal}>
          {userData && (
            <div className='flex flex-col items-center'>
              <h2 className="text-2xl font-bold mb-8">Información del Usuario</h2>
              <div className='flex flex-col items-start w-[420px] max-lg:w-full space-y-6'>
                <div className='flex max-lg:flex-col gap-12'>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-md text-primary'>Nombres:</p>
                    <p className='text-xl'>{userData.nombres}</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-md text-primary'>Apellidos:</p>
                    <p className='text-xl'>{userData.apellidos}</p>
                  </div>
                </div>
                <div className='flex gap-12 max-lg:flex-col'>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-md text-primary'>Teléfono:</p>
                    <p className='text-xl'>{userData.telefono}</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-md text-primary'>Fecha de Nacimiento:</p>
                    <p className='text-xl'>{userData.fechaNacimiento}</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-md text-primary'>Género:</p>
                    <p className='text-xl'>{userData.genero}</p>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <p className='font-semibold text-md text-primary'>Email:</p>
                  <p className='text-xl'>{userData.email}</p>
                </div>

              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default NavBar;
