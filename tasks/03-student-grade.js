function studentGrade(name, exam1, exam2, exam3) {
  const scores = [exam1, exam2, exam3].map(Number);
  const isBlank = (v) => v === null || v === undefined || String(v).trim() === '';
  const invalid =
    [exam1, exam2, exam3].some(isBlank) ||
    scores.some((s) => !Number.isFinite(s) || s < 0 || s > 100);

  if (invalid) {
    return { error: 'Invalid score!' };
  }

  const average = Math.round(((scores[0] + scores[1] + scores[2]) / 3) * 100) / 100;

  let result;
  if (average >= 90) {
    result = 'Excellent';
  } else if (average >= 70) {
    result = 'Good';
  } else if (average >= 50) {
    result = 'Passed';
  } else {
    result = 'Failed';
  }

  return {
    student: name,
    exam1: scores[0],
    exam2: scores[1],
    exam3: scores[2],
    average: average,
    result: result,
  };
}

module.exports = { studentGrade };
