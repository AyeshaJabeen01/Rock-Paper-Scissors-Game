const buttons = document.querySelectorAll('.pick');
const scoreEL = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_Select = document.getElementById('computer_Select');
const winner = document.getElementById('winner');



// modal button  stuff 
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');


const choices = ['paper', 'scissors', 'rock' ];

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

       
        checkWinner();
    
    });
});

reset.addEventListener('click', () => {
      //  show the selection | hide the main
      main.style.display = 'flex';
      selection.style.display ='none';
});

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';

});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  
});
 

function checkWinner() {
      const computerChoice= pickRandomChoice();

      // // update the view
      // updateSelection(user_select, userChoice);
      // updateSelection(computer_select, computerChoice);

      if (userChoice === computerChoice) {
          //draw
          winner.innerText = 'draw';
      } else if 
      ((userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice ==='scissors' && computerChoice ==='paper')
      ) {
        //   user won 
        updateScore(1);
        winner.innerText = 'win';
      } else {
        //   user lost 
        // updateScore(-1);
        winner.innerText = 'lost';
      }

    // show the selection | hide the main
       main.style.display = 'none';
       selection.style.display ='flex';
}


function  updateScore( ) {
    score += 1;

    scoreEL.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
} 

function updateSelection(selectionEl, choice) {
  
  // class reset
  selectionEl.classlist.remove('btn-paper');
  selectionEl.classlist.remove('btn-rock');
  selectionEl.classlist.remove('btn-scissors');

  // update the img 
  const img = selectionEl.querySelector('img'); 
  selectionEl.classlist.add(`btn-${choice}`);
  img.src =`icon-${choice}.svg`;
  img.alt = choice;

} 