function getDigitalTime() {
  //digital clock component
  const digitalClock = document.getElementById('the-digital-clock');

  //get the seconds, minutes, and hours using the date datatype
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  let session = 'AM';
  
  //corrects the hours to be 1-12 and not 1-24
  if(hours === 0) {
    hours = 12;
  }
  if(hours > 12) {
    hours = hours % 12;
    session = 'PM';
  }
  //adds zeros to the digital time
  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  hours = hours < 10 ? '0' + hours : hours;

  const time = `${hours}:${minutes}:${seconds} ${session}`;
  digitalClock.innerText = time;
  digitalClock.textContent = time;
}

function getAnalogTime() {
  //svg line elements that represent the hands of the clock
  const secondsHand = document.getElementById('seconds');
  const minutesHand = document.getElementById('minutes');
  const hoursHand = document.getElementById('hours');

  //get the seconds, minutes, and hours using the date datatype
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();

  //60 divides into 360 6 times.
  //gives you how much the arms should move in degrees
  let secondsAngle = seconds * 6;
  let minutesAngle = minutes * 6; 
  let hoursAngle;
  
  //corrects the hours to be 1-12 and not 1-24
  if(hours === 0) {
    hours = 12;
  }
  if(hours > 12) {
    hours = hours % 12;
  }

  //calculated after hours variable is corrected;
  ///12 divides into 360 30 times
  //moves 1/2 a degree per minute
  hoursAngle = hours * 30 + minutes * 0.5;

  secondsHand.setAttribute('transform', `rotate(${secondsAngle},50,50)`);
  minutesHand.setAttribute('transform', `rotate(${minutesAngle},50,50)`);
  hoursHand.setAttribute('transform', `rotate(${hoursAngle},50,50)`);
}

function changeClock() {
  const buttonText = document.getElementById('alter-clock');
  const digitalClock = document.getElementById('digital-clock');
  const analogClock = document.getElementById('analog-clock');
  
  if(buttonText.innerText === 'Digital') {
    setInterval(getDigitalTime, 1000);
    buttonText.innerText = 'Analog'
    analogClock.style.display = 'none';
    digitalClock.style.display = 'flex';
    
  } else {
    setInterval(getAnalogTime, 1000);
    buttonText.innerText = 'Digital';
    analogClock.style.display = 'flex';
    digitalClock.style.display = 'none';
  }

}
const button = document.getElementById('alter-clock');

window.addEventListener('load', changeClock);
button.addEventListener('click', changeClock);



