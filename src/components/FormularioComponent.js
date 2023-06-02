import React, { useRef } from 'react'

export const FormularioComponent = () => {

    const nombreInput = useRef();
    const apellidoInput = useRef();
    const emailInput = useRef();
    const divElement = useRef();

    const enviarHandler = e => {
        e.preventDefault();

        console.log(nombreInput.current.value, apellidoInput.current.value);

        if(nombreInput.current.value === 'Luna') {
            divElement.current.className='caja-verde';
            divElement.current.innerHTML = 'Luquitas...'
        }
    }

  return (
    <div>

        <div className='caja' ref={divElement}>
            <h2>Test useRef</h2>
        </div>

        <form onSubmit={enviarHandler}>
            <input type='text' ref={nombreInput} placeholder='Nombre' />
            <input type='text' ref={apellidoInput} placeholder='Apellido' />
            <input type='text' ref={emailInput} placeholder='Email' />
            <button type='submit' >Enviar</button>
        </form>

        <button onClick={e => nombreInput.current.select()}>Seleccionar 1er campo</button>

    </div>
  )
}

