import React from 'react'

const Home = () => {

  const nav = (
    <nav>
      <ul>
        <li>
          <a href="#1">Google</a>
        </li>
      </ul>
    </nav>
  );

  const idade = 30;


  return (
    <div>
      <h1>Home</h1>
      {nav}
      <p>{idade >= 30 ? "velho" : "Novo"}</p>

    </div>
  )
}

export default Home
