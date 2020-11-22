import React, { useState } from 'react';
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min';

export default function TotalService(props) {

  let formatNum = (n) => n.toFixed(2).replace(/.([^.]*)$/, ",$1");

  const [logoData, setLogoData] = useState(0);
  const [designData, setDesignData] = useState(0);

  if (props.ecommerce) {

  } else if (props.landingPage) {

  } else {
    if (props.quoteData.steps[13].message === 'Não') {
      if ((props.quoteData.steps[18].message === 'Sim') && (!logoData)) {
        setLogoData(4000.00)
      }
    }

    if (props.quoteData.steps[9].message === 'Não') {
      if ((props.quoteData.steps[11].message === 'Sim') && (!designData)) {
        setDesignData(2700.00)
      }
    }
  }

  $('.money').mask('000.000.000.000.000,00', { reverse: true });

  if (props.ecommerce) {
    return <p className="quoteFinalVal"><b>Total</b>: <span>
      R$ <span className="money">{
        formatNum(props.ecommercePrice + props.prodPrice)
      }</span>
    </span></p>
  } else if (props.landingPage) {
    return <p className="quoteFinalVal"><b>Total</b>: <span>
      R$ <span className="money">{
        formatNum(props.landingPagePrice)
      }</span>
    </span></p>
  } else {
    return <p className="quoteFinalVal"><b>Total</b>: <span>
      R$ <span className="money">{
        formatNum(props.websitePrice + props.pgsPrice + logoData + designData)
      }</span>
    </span></p>
  }
}