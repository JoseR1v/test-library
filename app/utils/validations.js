export const validateFormData = (formData) => {
    const errors = {};
  
    if (!/^[A-Za-z\s]+$/.test(formData.nombres)) errors.nombres = 'Solo letras permitidas';
    if (!/^[A-Za-z\s]+$/.test(formData.apellidos)) errors.apellidos = 'Solo letras permitidas';
    if (!/^\d{10}$/.test(formData.telefono)) errors.telefono = 'Debe tener 10 dígitos';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Correo no válido';
    if (!formData.fechaNacimiento) errors.fechaNacimiento = 'Campo obligatorio';
    if (!formData.genero) errors.genero = 'Seleccione un género';
  
    return errors;
};

export const getCurrentDate = () => {
    const hoy = new Date();
    const month = (hoy.getMonth() + 1).toString().padStart(2, "0");
    const day = hoy.getDate().toString().padStart(2, "0");
    const currentDay = `${hoy.getFullYear()}-${month}-${day}`;
    return currentDay;
};