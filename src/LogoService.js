import React, { useState } from 'react';
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min';

export default function LogoService(props) {

  let formatNum = (n) => n.toFixed(2).replace(/.([^.]*)$/, ",$1");

  const [logoData, setLogoData] = useState(0);

  if (props.quoteData.steps[13]?.message === 'Não') {
    if ((props.quoteData.steps[18]?.message === 'Sim') && (!logoData)) {
      setLogoData(4000.00)
    }
  }

  $('.money').mask('000.000.000.000.000,00', { reverse: true });

  return (
    <p>
      <b>Serviço de logo</b>: {
        !logoData ? 'Não contratado' : <span>
          R$ <span className="money">{
            formatNum(logoData)
          }</span>
        </span>
      }
    </p>
  )
}