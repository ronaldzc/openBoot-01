import React from "react";
import { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/Contact";

const ContactList = () => {
  const [estado, setEstado] = useState(false)
  const defaultContact = new Contact('Ronald', 'Zanga', 'correo@correo.com', estado);

  
  return (
    <div>
      <h1>Lista de Contactos</h1>

      {/* Aplicar map a la lista de contactos */}

      <ContactComponent contact={defaultContact}/>
      <br></br>
        <button onClick={()=>setEstado(estado ? false : true)}>Estado</button>
    </div>
  );
};

export default ContactList;
