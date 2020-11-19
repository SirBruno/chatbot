import React, { useState } from 'react';
import LogoService from './LogoService';
import TotalService from './TotalService';
import DesignService from './DesignService';
import GetPrice from './GetPrice';
import utils from './utils';
import './assets/styles/App.css'
import ChatBot from 'react-simple-chatbot';
import botImg from './assets/botImg.png';
import 'jquery-mask-plugin/dist/jquery.mask.min';

utils.maskMoney();

function Quote(props) {

  const [pgsPrice, setPgsPrice] = useState(0);
  const [prodPrice, setProdPrice] = useState(0);

  if (props.ecommerce) {
    if ((props.steps[506].message > 100) && prodPrice === 0) {
      setProdPrice((props.steps[506].message - 100) * utils.prodPrice);
    }
  } else {
    if ((props.steps[20].message > 10) && pgsPrice === 0) {
      setPgsPrice((props.steps[20].message - 10) * utils.pagePrice);
    }
  }

  utils.maskMoney();

  return (
    props.ecommerce ?
      <div>
        <p><b>E-commerce (base de preço)</b>: R$ <span className="money">{utils.formatNum(utils.ecommercePrice)}</span></p>
        <p><b>Produtos (x{props.steps[506].message})</b>: R$ <span className="money">{utils.formatNum(prodPrice)}</span></p>
        <TotalService ecommerce={true} ecommercePrice={utils.ecommercePrice} prodPrice={prodPrice} pgsPrice={pgsPrice} websitePrice={utils.websitePrice} quoteData={props} />
      </div>
      : <div>
        <p><b>Website (base de preço)</b>: R$ <span className="money">{utils.formatNum(utils.websitePrice)}</span></p>
        <p><b>Páginas (x{props.steps[20].message})</b>: R$ <span className="money">{utils.formatNum(pgsPrice)}</span></p>
        <DesignService quoteData={props} />
        <LogoService quoteData={props} />
        <TotalService pgsPrice={pgsPrice} websitePrice={utils.websitePrice} quoteData={props} />
      </div>
  )
}

function App(props) {

  // const [lastMsg, setLastMsg] = useState(null);
  // const [quote, setQuote] = useState({ graphicDesign: 0 });

  return (
    <div className="App">
      {/* <p>{lastMsg}</p> */}
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
              { value: 2, label: 'Serviços', trigger: '6' },
              { value: 3, label: 'Valores', trigger: '300' },
            ]
          },
          {
            id: '300',
            component: <GetPrice steps={props.steps} pagePrice={utils.formatNum(utils.pagePrice)} maskMoney={utils.maskMoney} websitePrice={utils.formatNum(utils.websitePrice)} />,
            trigger: '200',
          },
          {
            id: '400',
            user: true,
            trigger: '300',
          },
          {
            id: '500',
            message: 'Você precisa de um site institucional ou de um e-commerce?',
            trigger: '501'
          },
          {
            id: '501',
            options: [
              { value: 1, label: 'Site institucional', trigger: '502' },
              { value: 2, label: 'E-commerce', trigger: '503' }
            ]
          },
          {
            id: '502',
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
            trigger: '17'
          },
          {
            id: '503',
            message: 'Qual plataforma de e-commerce deseja usar?',
            trigger: '504'
          },
          {
            id: '504',
            options: [
              { value: 1, label: 'WooCommerce', trigger: '505' },
              { value: 2, label: 'Shopify', trigger: '505' },
              { value: 3, label: 'Loja integrada', trigger: '505' },
              { value: 4, label: 'VTEX', trigger: '505' },
            ]
          },
          {
            id: '505',
            message: 'Quantos produtos deseja cadastrar na loja?',
            trigger: '506'
          },
          {
            id: '506',
            user: true,
            trigger: '507',
          },
          {
            id: '507',
            component: <Quote ecommerce={true} steps={props.steps} />,
            trigger: '200'
          },
          {
            id: '17',
            options: [
              { value: 1, label: 'Sim', trigger: '8' },
              { value: 2, label: 'Não', trigger: '7' },
              { value: 3, label: 'Não sei dizer', trigger: '16' },
            ]
          },
          {
            id: '16',
            message: 'Se o seu site precisa de funcionalidades que exigem programação avançada, como um sistema de login customizado, meios de pagamento não presentes no WooCommerce, integrações que não podem ser feitas por meio de plugins já existentes na loja, ou qualquer coisa que envolva muito código, nós não poderemos te ajudar, uma vez que não trabalhamos com desenvolvimento de software. Esse é o caso do seu site?',
            trigger: '15'
          },
          {
            id: '15',
            options: [
              { value: 1, label: 'Sim', trigger: '8' },
              { value: 2, label: 'Não', trigger: '7' }
            ]
          },
          {
            id: '8',
            message: 'Desculpe, infelizmente não poderemos te ajudar.',
            trigger: '200'
          },
          {
            id: '7',
            message: 'O site já possui design (mockup, protótipo ou stylescape)?',
            trigger: '9'
          },
          {
            id: '9',
            options: [
              { value: 1, label: 'Sim', trigger: '12' },
              { value: 2, label: 'Não', trigger: '10' }
            ]
          },
          {
            id: '10',
            message: 'Deseja contratar um serviço de design gráfico para a criação do design?',
            trigger: '11'
          },
          {
            id: '11',
            options: [
              { value: 1, label: 'Sim', trigger: '12' },
              { value: 2, label: 'Não', trigger: '12' }
            ]
          },
          {
            id: '12',
            message: 'Sua marca já possui logo?',
            trigger: '13'
          },
          {
            id: '13',
            options: [
              { value: 1, label: 'Sim', trigger: '19' },
              { value: 2, label: 'Não', trigger: '14' }
            ]
          },
          {
            id: '14',
            message: 'Deseja contratar um serviço de criação de logo?',
            trigger: '18'
          },
          {
            id: '18',
            options: [
              { value: 1, label: 'Sim', trigger: '19' },
              { value: 2, label: 'Não', trigger: '19' }
            ]
          },
          {
            id: '6',
            component: (
              <div>
                <div><b>Nossos serviços</b></div>
                <div>Nós ofereçemos serviços de desenvolvimento web e design gráfico.</div>
              </div>
            ),
            trigger: '14'
          },
          {
            id: '19',
            message: 'Quantas páginas o site vai ter?',
            trigger: '20'
          },
          {
            id: '20',
            user: true,
            trigger: '21',
          },
          {
            id: '21',
            component: <Quote />,
            trigger: '19'
          },
        ]}
      />
    </div>
  );
}

export default App;
