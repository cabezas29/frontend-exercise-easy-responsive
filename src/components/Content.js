import React from 'react'

function Content() {
  return(
    <div className="content">
      <h2 className="content__title">
        Contenido del Libro
      </h2>
      <br/>
      <p className="content__detail">
        El contenido de este libro se estructura en tres apartados bien diferenciados
      </p>
      <br/>
      <article className="content__apart">
        <div className="content__apart--concepts">
          <li>
            En la primera parte del libro se trabajan conceptos generales que son necesarios para poder desarrollar páginas web; se explican conceptos de estructura física y estructura lógica (o estructura de navegación) de un sitio web. Se detalla cómo influye la estructura física en las URL o direcciones que se emplean a la hora de crear los enlaces de un sitio web. Pasando por el concepto de "estándar web", un término general que se emplea para refererirse a los estándares que define su funcionamiento como HTML y CSS, empleados para el desarrollo de las páginas web en el lado del cliente.
          </li>
        </div>
        <div className="content__apart--concepts">
          <li>
            En la segunda parte se trabaja HTML. Partiendo de la estructura básica de una página web, se explican las etiquetas de HTML que se utilizan para definir el texto, los enlaces, las listas, las tablas, los formularios y los elementos multimedia.
          </li>
        </div>
        <div className="content__apart--concepts">
          <li>
            En la tercera y última parte se explica CSS, el lenguaje que se emplea para definir el formato y la presentación de una página web. Se explica cómo utilizar el color, cómo definir la presentación del texto, de las tablas y de los formularios; cómo realizar transformaciones y transiciones con el fin de diseñar una página web.
          </li>
        </div>
      </article>
    </div>
  )
}

export default Content;