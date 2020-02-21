import React from 'react'

const Lista = () => {
  const produtos = ["Notebook", "Smartphone", "Tablet"];
  const livros = [
    { nome: "ola", ano: 1900 },
    { nome: "Tudo bem", ano: 1998 },
    { nome: "Nao", ano: 2000 }
  ];



  return (
    <div>
      <h1>Lista</h1>
      <ul>
        {produtos.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        {livros
          .filter(livro => livro.ano > 1900)
          .map(livro => (
            <li key={livro.nome}> {livro.nome} | {livro.ano} </li>

          ))}

      </ul>
    </div>
  )
}

export default Lista;