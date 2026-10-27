function shoppingReceipt(product, price, quantity) {
  const unitPrice = Number(price);
  const qty = Number(quantity);
  const total = unitPrice * qty;
  return {
    product: product,
    unitPrice: unitPrice,
    quantity: qty,
    total: total,
    over20: total > 20,
  };
}

module.exports = { shoppingReceipt };
