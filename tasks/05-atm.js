function atm(enteredPin, option, amount) {
  let balance = 500;
  const pinCode = '1234';

  if (String(enteredPin) !== pinCode) {
    return { message: 'Incorrect PIN!', balance: balance };
  }

  const parseAmount = (value) => {
    if (value === null || value === undefined || String(value).trim() === '') return NaN;
    const n = Number(value);
    return Number.isFinite(n) && n > 0 ? n : NaN;
  };

  switch (String(option)) {
    case '1': {
      return { message: 'Balance: ' + balance + ' AZN', balance: balance };
    }
    case '2': {
      const value = parseAmount(amount);
      if (Number.isNaN(value)) {
        return { message: 'Invalid amount!', balance: balance };
      }
      balance += value;
      return { message: 'Deposit successful!', balance: balance };
    }
    case '3': {
      const value = parseAmount(amount);
      if (Number.isNaN(value)) {
        return { message: 'Invalid amount!', balance: balance };
      }
      if (value > balance) {
        return { message: 'Insufficient balance!', balance: balance };
      }
      balance -= value;
      return { message: 'Withdrawal successful!', balance: balance };
    }
    case '4': {
      return { message: 'Goodbye!', balance: balance };
    }
    default: {
      return { message: 'Invalid option!', balance: balance };
    }
  }
}

module.exports = { atm };
