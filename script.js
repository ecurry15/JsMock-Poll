const button = document.getElementById('button');

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  displayResults(type = 'array') {
    if (type =='array') {
      console.log(this.answers);
    } else if (type == 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
  registerNewAnswer () {
    let userAnswer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number.)`));
    if (typeof userAnswer === 'number' && userAnswer <= this.answers.length) {
    this.answers[userAnswer]++ ;
    } else {
      alert('Invalid Number, Please submit again.')
    }
    this.displayResults();
  }
};


button.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5,2,3]});
poll.displayResults.call({answers: [1,5,3,9,6,1]}, 'string');