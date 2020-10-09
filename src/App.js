import React, { useState } from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import botImg from './assets/botImg.png';

function App() {

  const [lastMsg, setLastMsg] = useState(null);

  return (
    <div className="App">
      <p>{lastMsg}</p>
      <ChatBot width="600px" botAvatar={botImg}
        steps={[
          {
            id: '1',
            message: 'Olá, como posso ajudar?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'Orçamento', trigger: '2' },
              { value: 2, label: 'Serviços', trigger: '2' },
              { value: 3, label: 'Valores', trigger: '3' },
            ],
            trigger: '2',
          },
          {
            id: '3',
            component: (
              <div>
                <div><b>Site institucional (5 pg.):</b><br />R$ 3.000 + R$ 300 p/ página</div>
                <br />
                <div><b>E-commerce (100 prod.):</b><br />R$ 7.000 + R$ 10 p/ produto</div>
                <br />
                <div><b>Landing page:</b><br />R$ 1.400</div>
              </div>
            ),
            trigger: '2',
          },
          {
            id: '4',
            user: true,
            trigger: '3',
          },
          {
            id: '5',
            message: ({ previousValue, steps }) => {
              console.log(previousValue);
              if (previousValue.toLowerCase() === 'bruno') {
                return `Em que posso ajudar, mestre?`
              } else if (previousValue.includes('vegano')) {
                return `Vegano é meu ovo`
              } else if (previousValue.includes('time')) {
                return `Eu nem assisto futebol parcero`
              } else if (previousValue.includes('tudo bem?')) {
                return `Sim, e vc?`
              } else if (previousValue.toLowerCase() === 'tudo') {
                return `legal`
              } else return `fodase kkkkkkkk`
            },
            trigger: '2'
          }
        ]}
      />
    </div>
  );
}

export default App;
