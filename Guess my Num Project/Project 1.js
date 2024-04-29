'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number..!!';
// document.querySelector('.num').textContent = 26;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretnum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.chk').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //    console.log(document.querySelector('.guess').value);

  //When there is no input;
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Guess!!😁';

    displayMessage('No Guess!!😁');
  }
  //When Players wins
  else if (guess === secretnum) {
    // document.querySelector('.message').textContent = 'Correct Number!!🎉😎😍';

    displayMessage('Correct Number!!😎😍');
    document.querySelector('.num').textContent = secretnum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.num').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnum) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretnum
      //       ? 'Number is too high Ch SBH 🙄!!!'
      //       : 'Number is too Low!!!';

      displayMessage(
        guess > secretnum
          ? ' 📈 Number is too high Ch SBH 🙄!!!'
          : ' 📉 Number is too Low  😫🥱!!!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Lost the Game!!!';

      displayMessage(' 💥 You Lost the Game!!!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   //when guess num is higher;
  //   else if (guess > secretnum) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent =
  //         'Number is too high Ch SBH 🙄!!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   //when guess num is Lower;
  //   else if (guess < secretnum) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Number is too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.btn').addEventListener('click', function () {
  score = 20;
  secretnum = Math.trunc(Math.random() * 20 + 1);

  //   document.querySelector('.message').textContent = 'Start Guessing...!!';
  displayMessage('Start Guessing...!!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.num').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.num').style.width = '15rem';
});
