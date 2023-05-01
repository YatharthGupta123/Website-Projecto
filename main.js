// WEBSITE PROJECT

document.getElementById("btn").addEventListener("click", Submit);

// Store order code in a function
function Submit() {
  let Q1 = document.getElementById("Q1").value.toLowerCase();
  let Q2 = document.getElementById("Q2").value.toLowerCase();
  let Q3 = document.getElementById("Q3").value.toLowerCase();
  let Q4 = document.getElementById("Q4").value.toLowerCase();
  // let score = +document.getElementById("Q4").value;
  let score = 0;

  if (Q1 === "serve") {
    document.getElementById("feedback_1").className = `feedbackRight`;
    document.getElementById("feedback_1").innerText = `Correct`;
    document.getElementById("Q1").className = `inputRight`;
    score++;
  } else {
    document.getElementById("feedback_1").className = `feedbackWrong`;
    document.getElementById("feedback_1").innerText = `Incorrect`;
    document.getElementById("Q1").className = `inputWrong`;
  }
  if (Q2 === "ace") {
    document.getElementById("feedback_2").className = `feedbackRight`;
    document.getElementById("feedback_2").innerText = `Correct`;
    document.getElementById("Q2").className = `inputRight`;
    score++;
  } else {
    document.getElementById("feedback_2").className = `feedbackWrong`;
    document.getElementById("feedback_2").innerText = `Incorrect`;
    document.getElementById("Q2").className = `inputWrong`;
  }
  if (Q3 === "volley") {
    document.getElementById("feedback_3").className = `feedbackRight`;
    document.getElementById("feedback_3").innerText = `Correct`;
    document.getElementById("Q3").className = `inputRight`;
    score++;
  } else {
    document.getElementById("feedback_3").className = `feedbackWrong`;
    document.getElementById("feedback_3").innerText = `Incorrect`;
    document.getElementById("Q3").className = `inputWrong`;
  }
  if (Q4 === "forehand" || Q4 === "backhand") {
    document.getElementById("feedback_4").className = `feedbackRight`;
    document.getElementById("feedback_4").innerText = `Correct`;
    document.getElementById("Q4").className = `inputRight`;
    score++;
  } else {
    document.getElementById("feedback_4").className = `feedbackWrong`;
    document.getElementById("feedback_4").innerText = `Incorrect`;
    document.getElementById("Q4").className = `inputWrong`;
  }

  let percent = (score * 100) / 4;
  // Encouragement
  if (score === 0) {
    document.getElementById("score").innerHTML = `${score}/4 (${percent}%)`;
    document.getElementById("response").innerHTML = `Need more practice!`;
  } else if (score === 1) {
    document.getElementById("score").innerHTML = `${score}/4 (${percent}%)`;
    document.getElementById("response").innerHTML = `Better luck next time!`;
  } else if (score === 2) {
    document.getElementById("score").innerHTML = `${score}/4 (${percent}%)`;
    document.getElementById("response").innerHTML = `Nice!`;
  } else if (score === 3) {
    document.getElementById("score").innerHTML = `${score}/4 (${percent}%)`;
    document.getElementById("response").innerHTML = `Good!`;
  } else if (score === 4) {
    document.getElementById("score").innerHTML = `${score}/4 (${percent}%)`;
    document.getElementById("response").innerHTML = `Excellent!!`;
  }
}
