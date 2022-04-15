class Chronometer {
  constructor() {

    // currentTime guarda o total dos segundos desde iniciar o chronometer
   this.currentTime = 0
   this.intervalId = null
  }

  start(callback) {
  
  this.intervalId = setInterval(() => {
    this.currentTime++

    //se tiver uma funcao de callback, execute a funcao
    if (typeof callback === 'function'){
      callback()
    }
   }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0')
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let seconds = this.getSeconds()
    let minutes = this.getMinutes()
    
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
