import React from 'react'

const Atributos = () => {

  const abre = 8;
  const agora = new Date().getHours();

  return (

    <div>
      <h1 style={{ color: 'red', backgroundColor: 'pink', fontSize: '60px' }}>Empresa</h1>
      <p className={agora > abre ? "aberto" : "fechado"}>Fuincionamento</p>
    </div>
  )
}

export default Atributos;

//https://www.youtube.com/watch?v=iIQOtwsWXqU