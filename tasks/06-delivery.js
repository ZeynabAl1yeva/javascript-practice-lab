function delivery(amount, zone, isVIP, promoCode) {
  const round2 = (n) => Math.round(n * 100) / 100;

  const orderAmount = Number(amount);
  const isBlank = amount === null || amount === undefined || String(amount).trim() === '';

  if (isBlank || !Number.isFinite(orderAmount) || orderAmount <= 0) {
    return { error: 'Invalid input!' };
  }

  const zoneNumber = Number(zone);
  let deliveryFee;
  switch (zoneNumber) {
    case 1:
      deliveryFee = 3;
      break;
    case 2:
      deliveryFee = 6;
      break;
    case 3:
      deliveryFee = 10;
      break;
    default:
      return { error: 'Invalid input!' };
  }

  if (orderAmount >= 50) {
    deliveryFee = 0;
  }

  const vip = isVIP === true;
  let discount = vip ? orderAmount * 0.1 : 0;

  if (promoCode === 'SAVE5') {
    const afterVip = orderAmount - discount;
    discount += Math.min(5, afterVip);
  }

  discount = round2(discount);
  const total = round2(orderAmount - discount + deliveryFee);

  return {
    orderAmount: orderAmount,
    zone: zoneNumber,
    vip: vip,
    discount: discount,
    delivery: deliveryFee,
    total: total,
  };
}

module.exports = { delivery };
