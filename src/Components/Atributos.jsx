import React from 'react'

const Atributos = () => {

  const abre = 8;
  const agora = new Date().getHours();
  const estiloTitulo = {
    color: 'red',
    backgroundColor: 'pink',
    fontSize: '60px'
  };

  function handleClick(event) {
    console.log(event.target);
    event.target.classList.add('aberto')
  };

  return (

    <div>
      <h1 style={estiloTitulo}>Empresa</h1>
      <p className={agora > abre ? "aberto" : "fechado"}>Fuincionamento</p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default Atributos;

//https://www.youtube.com/watch?v=iIQOtwsWXqU
//https://origamid.com/slide/youtube/#/0102-react-para-iniciantes/15
//https://reactjs.org/docs/dom-elements.html
//https://pt-br.reactjs.org/docs/create-a-new-react-app.html