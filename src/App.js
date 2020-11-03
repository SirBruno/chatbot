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
            id: '100',
            message: 'Olá, como posso ajudar?',
            trigger: '200',
          },
          {
            id: '200',
            options: [
              { value: 1, label: 'Orçamento', trigger: '500' },
              { value: 2, label: 'Serviços', trigger: '600' },
              { value: 3, label: 'Valores', trigger: '300' },
            ],
            trigger: '200',
          },
          {
            id: '300',
            component: (
              <div>
                <div><b>Site institucional (5 pg.):</b><br />R$ 3.000 + R$ 300 p/ página</div>
                <br />
                <div><b>E-commerce (100 prod.):</b><br />R$ 7.000 + R$ 10 p/ produto</div>
                <br />
                <div><b>Landing page:</b><br />R$ 1.400</div>
              </div>
            ),
            trigger: '200',
          },
          {
            id: '400',
            user: true,
            trigger: '300',
          },
          {
            id: '500',
            message: 'Seu site precisa de funcionalidades que o WordPress não possui nativamente?',
            // message: ({ previousValue, steps }) => {
            //   console.log(previousValue);
            //   if (previousValue.toLowerCase() === 'bruno') {
            //     return `Em que posso ajudar, mestre?`
            //   } else if (previousValue.includes('vegano')) {
            //     return `Vegano é meu ovo`
            //   } else if (previousValue.includes('time')) {
            //     return `Eu nem assisto futebol parcero`
            //   } else if (previousValue.includes('tudo bem?')) {
            //     return `Sim, e vc?`
            //   } else if (previousValue.toLowerCase() === 'tudo') {
            //     return `legal`
            //   } else return `fodase kkkkkkkk`
            // },
            trigger: '501'
          },
          {
            id: '501',
            options: [
              { value: 1, label: 'Sim', trigger: '500' },
              { value: 2, label: 'Não', trigger: '600' },
              { value: 3, label: 'Não sei dizer', trigger: '502' },
            ],
            trigger: '501'
          },
          {
            id: '502',
            message: 'Se o seu site precisa de funcionalidades que exigem programação avançada, como um sistema de login customizado, meios de pagamento não presentes no WooCommerce, integrações que não podem ser feitas por meio de plugins já existentes na loja, ou qualquer coisa que envolva muito código, nós não poderemos te ajudar, uma vez que não trabalhamos com desenvolvimento de software. Esse é o caso do seu site?',
            trigger: '503'
          },
          {
            id: '503',
            options: [
              { value: 1, label: 'Sim', trigger: '504' },
              { value: 2, label: 'Não', trigger: '504' }
            ],
            trigger: '503'
          },
          {
            id: '504',
            message: 'Desculpe, infelizmente não poderemos te ajudar.',
            trigger: '200'
          },
          {
            id: '600',
            component: (
              <div>
                <div><b>Nossos serviços</b></div>
                <div>Nós ofereçemos serviços de desenvolvimento web e design gráfico.</div>
              </div>
            ),
            trigger: '200'
          }
        ]}
      />
    </div>
  );
}

export default App;
