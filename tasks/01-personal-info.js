function personalInfo(name, age, city) {
  if (typeof name !== 'string' || name.trim() === '') {
    return { warning: 'Name is required!' };
  }

  const ageNumber = Number(age);
  const ageAfter5 = ageNumber + 5;

  return {
    name: name,
    age: ageNumber,
    city: city,
    ageAfter5: ageAfter5,
    nameType: typeof name,
    ageType: typeof ageNumber,
  };
}

module.exports = { personalInfo };
