import React from 'react'
import { useForm } from 'react-hook-form'

const CreateUser = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    
  }
  return (
    <article className='createUser'>

      <h2>Crear nuevo usuario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Documento
          <input type="text" placeholder='Ingrese el documento' />
        </label>
        <label>
          Nombre
          <input type="text" placeholder='Ingrese el nombre' />
        </label>
        <label>
          Apellidos
          <input type="text" placeholder='Ingrese los apellidos' />
        </label>
        <label>
          Teléfono
          <input type="text" placeholder='Ingrese el teléfono' />
        </label>
        <label>
          E-mail
          <input type="text" placeholder='Correo electrónico' />
        </label>
        <label>
          Dirección
          <input type="text" placeholder='Ingrese la dirección' />
        </label>
        
        <button>CREAR USUARIO</button>
      </form>

    </article>
  )
}

export default CreateUser