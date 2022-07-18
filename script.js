const button = document.getElementById('button');

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
};



poll.registerNewAnswer = () => {
  let userAnswer = parseInt(window.prompt(`${poll.question}`));
  if (userAnswer > 3) {
    alert('Invalid Number, Please submit again.')
  } else {
    poll.answers[userAnswer]++ ;
    console.log(poll.answers);
  }
}

button.addEventListener('click', poll.registerNewAnswer);