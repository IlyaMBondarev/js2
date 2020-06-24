const add = (cart, req) => {
  cart.contents.push(req.body);
  cart.countGoods += req.body.quantity;
  cart.amount += req.body.price*req.body.quantity;
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
  cart.countGoods += req.body.quantity;
  cart.amount += req.body.price*req.body.quantity;
  return JSON.stringify(cart, null, 4);
};
const del = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  cart.countGoods--;
  cart.amount -= req.body.price;
  if (find.quantity === 1) {
    cart.contents.splice(cart.contents.indexOf(find), 1);
  } else {
    find.quantity -= req.body.quantity;
  }
  return JSON.stringify(cart, null, 4);
};

const clr = (cart, req) => {
  cart.amount = 0;
  cart.countGoods = 0;
  cart.contents = [];
  return JSON.stringify(cart, null, 4);
};

const checkout = (cart, req) => {
  if (req.body.quantity > 0) {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    const difference = +req.body.quantity - find.quantity;
    find.quantity = +req.body.quantity;
    cart.amount += difference*find.price;
    cart.countGoods += difference;
    return JSON.stringify(cart, null, 4);
  }
  return JSON.stringify(cart, null, 4);
}

module.exports = {
  add,
  change,
  del,
  clr,
  checkout
};
