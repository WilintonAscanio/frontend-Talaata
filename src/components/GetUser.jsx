import React, { useEffect, useState } from 'react'
import { getUser } from '../services/getUser'

const GetUser = () => {
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [newArray, setNewArray] = useState('')
  useEffect(() => {
    getUser().then((response) => {
      setData(response)
    })
      .catch((error => console.log(error)))



  }, [])

  const searchUsers = ({ value }) => {
    setInputValue(value)
    const users = data?.filter(user => (user.nombre.toLowerCase().includes(value.toLowerCase()) || user.apellidos.toLowerCase().includes(value.toLowerCase())))
    setNewArray(users)

  }

  return (
    <div className='getUsers'>
      <section>
        <h2>Lista de usuarios</h2>
        <input type="text" placeholder='Buscar un usuario' onChange={(e) => searchUsers(e.target)} />
      </section>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Direccion</th>
            <th>Genero</th>
          </tr>
        </thead>
        <tbody>
          {inputValue ? <>
            {newArray.length ? newArray.map((user, index) =>
              <tr key={index}>
                <td>{user.employeeID}</td>
                <td>{user.documento}</td>
                <td>{user.nombre}</td>
                <td>{user.apellidos}</td>
                <td>{user.telefono}</td>
                <td>{user.email}</td>
                <td>{user.direccion}</td>
                <td>{user.genero}</td>

              </tr>) : <></>}</> :
            <>
              {data?.length ? data.map((user, index) =>
                <tr key={index}>
                  <td>{user.employeeID}</td>
                  <td>{user.documento}</td>
                  <td>{user.nombre}</td>
                  <td>{user.apellidos}</td>
                  <td>{user.telefono}</td>
                  <td>{user.email}</td>
                  <td>{user.direccion}</td>
                  <td>{user.genero}</td>
                </tr>) : <></>}</>}



        </tbody>
      </table>
      <strong>{inputValue && !newArray.length || !data ? 'Usuario no encontrado' : ''}</strong>
    </div>
  )
}

export default GetUser