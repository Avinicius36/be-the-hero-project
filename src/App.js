import React from 'react';
import Logon from './pages/Logon';
import './global.css';


function App() {
  return (
    <Logon />
    );
}

export default App;

// No exemplo de ter titulos diferentes por páginas, posso passar uma propriedade ao meu Header

  //UseState retorna um array com duas posições
  // Array [valor, funçãode Atualização]

  // Conceito de Estado: Toda vez que o meu componente tiver de mudar, eu não mudo direto nele, preciso 
  // utilizar o SetState para alterar o componente