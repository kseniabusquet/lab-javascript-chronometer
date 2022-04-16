const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printSeconds()
  printMinutes()

}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minUniElement.innerHTML = minutes[1]
  minDecElement.innerHTML = minutes[0]
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secUniElement.innerHTML = seconds[1]
  secDecElement.innerHTML = seconds[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const li = document.createElement('li')
  const liContent = `${chronometer.split()}`
  li.innerHTML = liContent
  splitsElement.appendChild(li)
}

function clearSplits() {
  splitsElement.innerHTML = ''}

function setStopBtn() {
  btnLeftElement.innerText = 'START'
  btnRightElement.innerHTML = 'RESET'

  chronometer.stop()
  toggleColors()
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  btnLeftElement.innerText = 'STOP'
  btnRightElement.innerHTML = 'SPLIT'

  chronometer.start(printTime)
  toggleColors()
}

function setResetBtn() {
  chronometer.reset()
  printTime()
  clearSplits()
}

function toggleColors(){
  btnLeftElement.classList.toggle('start')
  btnLeftElement.classList.toggle('stop')

  btnRightElement.classList.toggle('reset')
  btnRightElement.classList.toggle('split')
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
if (btnLeftElement.innerText === 'START') {
  setStartBtn()
 } else if (btnLeftElement.innerText === 'STOP'){
  setStopBtn()
 }
}
);

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START'){
    setResetBtn()
  } else if (btnLeftElement.innerText === 'STOP'){
    setSplitBtn()
  }
});
