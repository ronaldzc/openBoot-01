import React from 'react'
import PropTypes from 'prop-types'
import {Contact} from '../../models/contact.class'

const ContactComponent = ({contact}) => {

    return (
    <div>
        <h2>{ contact.nombre }</h2>
        <h2>{ contact.apellido }</h2>
        <h2>{ contact.email }</h2>
        <span>{ contact.conectado ? 'EN LINEA' : 'NO DISPONIBLE'}</span>

    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent