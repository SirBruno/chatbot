import $ from 'jquery';

const utils = {
  maskMoney: () => {
    $('.money').mask('000.000.000.000.000,00', { reverse: true });
  },
  formatNum: (n) => n.toFixed(2).replace(/.([^.]*)$/, ",$1"),
  websitePrice: 5000.00,
  ecommercePrice: 12000.00,
  pagePrice: 450.00,
  prodPrice: 10.00,
}

export default utils;