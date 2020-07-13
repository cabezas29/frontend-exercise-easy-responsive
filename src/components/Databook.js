import React from 'react'


function Databook() {
  return(
    <div className="databook">
      <h2 className="databook__title">
          Datos del Libro
      </h2>
      <br/>
      <ul className="databook__items">
        <li className="databook__items--elements">
          <p>Título: HTML & CSS: Curso práctico avanzado</p>
        </li>
        <li className="databook__items--elements">
          <p>Autor: Sergio Luján Mora</p>
        </li>
        <li className="databook__items--elements">
          <p>Editorial: Publicaciones Altamira</p>
        </li>
        <li className="databook__items--elements">
          <p>Año de publicación: 2015</p>
        </li>
        <li className="databook__items--elements">
        <p>ISBN: 978-84-944049-4-8</p>
        </li>
        </ul>
    </div>
  )
}

export default Databook;