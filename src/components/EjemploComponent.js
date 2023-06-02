import React, { useEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {
    const [cantidad, setCantidad] = useState(0);
    const cola = useRef(cantidad)

    useEffect(() => {
        // debido al cambio del current del useRef podemos mostrar el numero actualizado
        cola.current = cantidad;
        

        setTimeout(() => {
            // aqui tenemos un retraso en los mensajes de 2 segs
            // console.log('Mensajes en cola: '+ cantidad)

            // asi se muestra el valor actual 
            console.log('Mensajes en cola: '+ cola.current)
        }, 2000);
    }, [cantidad])

    const enviarSaludo = () => {
        setCantidad(cantidad + 1);
    }

  return (
    <div>
        <h3>Cantidad de saludos: {cantidad}</h3>

        <button onClick={enviarSaludo}>Enviar Saludo</button>

    </div>
  )
}
