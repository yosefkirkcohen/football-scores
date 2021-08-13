// import functions and grab DOM elements
const ninersScoreEl = document.querySelector('#niners-score')
const seahawksScoreEl = document.querySelector('#seahawks-score')
const ninersButtonEl = document.querySelector('#niners-button')
const seahawksButtonEl = document.querySelector('#seahawks-button')


// initialize state
let ninersScore = 0;
let seahawksScore = 0;
// set event listeners 
ninersButtonEl.addEventListener('click', () => {
  ninersScore += 7;
  ninersScoreEl.textContent = ninersScore;
})

seahawksButtonEl.addEventListener('click', () => {
  seahawksScore += 7;
  seahawksScoreEl.textContent = seahawksScore;
})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
