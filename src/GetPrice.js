import React from 'react'

export default function GetPrice(props) {

  props.maskMoney();

  console.log(props.steps)

  return (
    <div>
      <div><b>Site institucional (10 pg.):</b><br />R$ <span className="money">{props.websitePrice}</span> + R$ <span className="money">{props.pagePrice}</span> p/ página adicional</div>
      <br />
      <div><b>E-commerce (100 prod.):</b><br />R$ <span className="money">{props.ecommercePrice}</span> + R$ <span className="money">{props.prodPrice}</span> p/ produto adicional</div>
      <br />
      <div><b>Landing page:</b><br />R$ <span className="money">{props.landingPagePrice}</span></div>
    </div>
  )
}