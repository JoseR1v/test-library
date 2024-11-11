"use client";
import Card from "../../components/atoms/Card";
import Back from "../../components/molecules/BackHome";
import Form from "../../components/organisms/Form";
import Modal from "../../components/atoms/Modal"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faHome } from "@fortawesome/free-solid-svg-icons";

export default function RegisterPage() {

    const router = useRouter()

    const fields = [
        { name: 'nombres', label: 'Nombres', placeholder: 'Escribe tus nombres' },
        { name: 'apellidos', label: 'Apellidos', placeholder: 'Escribe tus apellidos' },
        { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '1234567890' },
        { name: 'email', label: 'Correo Electrónico', type: 'email', placeholder: 'correo@ejemplo.com' },
        { name: 'fechaNacimiento', label: 'Fecha de Nacimiento', type: 'date' },
        { name: 'genero', label: 'Género', type: 'radio', options: ['Masculino', 'Femenino', 'Otro'], placeholder: 'Seleccione un género' }
      ];

      const [isModalOpen, setIsModalOpen] = useState(false);

      const handleOpenModal = () => setIsModalOpen(true);
      const handleCloseModal = () => setIsModalOpen(false);

      const handleFormSubmit = (formData) => {
        localStorage.setItem('userData', JSON.stringify(formData));
        handleOpenModal();
      };

    
      const handleConfirm = () => {
        router.push('/');
        handleCloseModal();
      };

    return (
        <div className="flex flex-col gap-8">
            <div>
                <Back route="/" icon={faHome}/>
            </div>
            <div className="flex justify-center">
                <Card className="w-3/4 max-lg:w-full px-20 max-lg:px-6 flex flex-col items-center ">
                    <h2 className="font-bold text-3xl py-6 max-lg:text-2xl">Ingresa tus datos</h2>
                    <Form fields={fields} onSubmit={handleFormSubmit}/>
                </Card>
            </div>
            {isModalOpen &&
                <Modal
                    buttonLabel="Confirmar"
                    onButtonClick={handleConfirm}
                >
                    <FontAwesomeIcon icon={faCircleCheck} className="h-12 text-primary "/>
                    <h2 className="font-semibold text-xl max-lg:text-lg text-center">¡Tus datos han sido guardados exitosamente!</h2>
                </Modal>
            }
        </div>
    );
}