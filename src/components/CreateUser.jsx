import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { addUser } from '../services/addUser'
import Swal from 'sweetalert2'

const CreateUser = () => {
  const [gender, setGender] = useState(null)
  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()


  const handleKeyPress = (event) => {
    const keyCode = event.which || event.keyCode;

    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8) {
      event.preventDefault();
    }
  };
  const validateEmail = ({ target }) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(target.value)) {
      setEmailError('Correo electrónico no válido');
      return;
    } else {
      setEmailError('');
      setEmail(target.value)

    }
  }

  const onSubmit = (data) => {
    const document = parseInt(data.Documento)

    if (emailError) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, corrige los errores en el formulario.',
      });
    }
    else {
      const newData = {
        ...data,
        Documento: document,
        Email: email,
        Genero: gender
      }
      addUser(newData);
      Swal.fire({
        icon: 'success',
        text: 'Usuario creado',
      });
    }
    reset()
    setGender(null)

  }

  const handleGenderChange = ({ target }) => {
    setGender(target.value);

  }
  return (
    <div className='createUser'>

      <h2>Crear nuevo usuario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Documento
          <input type="text" onKeyDown={handleKeyPress} placeholder='Ingrese el documento' {...register('Documento', {
            required: 'Este campo es requerido'
          })} />
        </label>
        {errors.Documento ? <span>{errors.Documento.message}</span> : ''}
        <label>
          Nombre
          <input type="text" placeholder='Ingrese el nombre' {...register('Nombre', {
            required: 'Este campo es requerido'
          })} />
        </label>
        {errors.Nombre ? <span>{errors.Nombre.message}</span> : ''}

        <label>
          Apellidos
          <input type="text" placeholder='Ingrese los apellidos' {...register('Apellidos', {
            required: 'Este campo es requerido'
          })} />
        </label>
        {errors.Apellidos ? <span>{errors.Apellidos.message}</span> : ''}

        <label>
          Teléfono
          <input type="text" placeholder='Ingrese el teléfono' {...register('Telefono', {
            required: 'Este campo es requerido'
          })} />
        </label>
        {errors.Telefono ? <span>{errors.Telefono.message}</span> : ''}

        <label>
          E-mail
          <input type="text" placeholder='Correo electrónico' onChange={validateEmail} />
        </label>
        {emailError ? <span>{emailError}</span> : ''}

        <label>
          Dirección
          <input type="text" placeholder='Ingrese la dirección' {...register('Direccion', {
            required: 'Este campo es requerido'
          })} />
        </label>
        {errors.Direccion ? <span>{errors.Direccion.message}</span> : ''}

        <section>
          <label>
            Masculino
            <input type="radio" value='M' checked={gender === 'M'} onChange={handleGenderChange} />

          </label>
          <label>

            Femenino
            <input type="radio" value='F' checked={gender === 'F'} onChange={handleGenderChange} />
          </label>
        </section>



        <button>CREAR USUARIO</button>
      </form>

    </div>
  )
}

export default CreateUser