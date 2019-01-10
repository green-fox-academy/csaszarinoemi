'use strict'

const xhr = new XMLHttpRequest();
xhr.open('GET', '/game');
xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    gameTable(res);
  }
}
xhr.send();


const gameTable = (data) => {
  const question = document.querySelector('.question');
  const answers = document.querySelector('.answers');
  const answer1 = document.querySelector('.answer1');
  const answer2 = document.querySelector('.answer2');
  const answer3 = document.querySelector('.answer3');
  const answer4 = document.querySelector('.answer4');
  const score = document.querySelector('.score');

  let myscore = 0;
  question.textContent = data.question;
  answer1.textContent = data.answers[0].answer;
  answer2.textContent = data.answers[1].answer;
  answer3.textContent = data.answers[2].answer;
  answer4.textContent = data.answers[3].answer;
  score.textContent = `SCORE: ${myscore}`;

  console.log(data.answers);

  answers.appendChild(answer1);
  answers.appendChild(answer2);
  answers.appendChild(answer3);
  answers.appendChild(answer4);
  document.body.appendChild(score);
  document.body.appendChild(question);
  document.body.appendChild(answers);

  let goodAnswer = "";
  data.answers.forEach(element =>{
    if (element.is_correct === 1) {
      goodAnswer = element.answer;
    }
  })

  answers.addEventListener('click', (event) => {
    console.log(event.target);
    
    data.answers.forEach(element => {
      
      if (event.target.textContent === element.answer) {
        if (element.is_correct === 1) {
          event.target.setAttribute('style', 'background-color: green');

        } else {
          console.log(event.target.parentElement.children);
          event.target.setAttribute('style', 'background-color: red');
          for (let i = 0; i < event.target.parentElement.children.length; i++) {
            if (event.target.parentElement.children[i].textContent === goodAnswer) {
              event.target.parentElement.children[i].setAttribute('style', 'background-color: green');
            }
          }
        }
      }
    });

  });



}

