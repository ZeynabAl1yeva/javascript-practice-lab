function movieTicket(name, age, hasTicket) {
  const isBlank = age === null || age === undefined || String(age).trim() === '';
  const ageNumber = Number(age);

  if (isBlank || !Number.isFinite(ageNumber) || ageNumber < 0) {
    return { error: 'Invalid age!' };
  }

  let result;
  if (ageNumber < 16) {
    result = 'Age restriction!';
  } else if (!hasTicket) {
    result = 'Ticket required!';
  } else if (ageNumber >= 16 && hasTicket) {
    result = 'Welcome to the cinema!';
  }

  return {
    name: name,
    age: ageNumber,
    hasTicket: hasTicket,
    result: result,
  };
}

module.exports = { movieTicket };
