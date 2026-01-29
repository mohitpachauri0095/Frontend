let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("Sum =", sum);

function analyzeScores(scoresArray) {
  let excellentCount = 0;
  let passCount = 0;
  let failCount = 0;
  let total = 0;
  let sum = 0;

  for (let i = 0; i < scoresArray.length; i++) {
    let score = Number(scoresArray[i]);

    if (isNaN(score)) continue;

    total++;
    sum += score;

    if (score >= 90) {
      excellentCount++;
    } else if (score >= 60) {
      passCount++;
    } else {
      failCount++;
    }

    // ternary operator (required)
    let category = score >= 90 ? "Excellent" : score >= 60 ? "Pass" : "Fail";
  }

  let average = total === 0 ? 0 : Number((sum / total).toFixed(2));

  return {
    totalStudents: total,
    excellent: excellentCount,
    pass: passCount,
    fail: failCount,
    averageScore: average
  };
}

// usage
const scores = ["85", 92, "67", 40, 100, "30", 76, "90"];
const result = analyzeScores(scores);
console.log(result);
