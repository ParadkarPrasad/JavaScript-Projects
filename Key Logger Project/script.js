const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

startBtn.addEventListener('click', () =>{
  document.addEventListener("keydown", handleDown)
  document.addEventListener("keyup", handleUp)
  startBtn.disabled = true;
  stopBtn.disabled = false;
})
stopBtn.addEventListener('click', () =>{
  document.removeEventListener("keydown", handleDown)
  document.removeEventListener("keyup", handleUp)
  logDiv.textContent = ''
  stateDiv.textContent = ''
  startBtn.disabled = false;
  stopBtn.disabled = true;
})

const handleDown = (e) =>{
  logDiv.textContent = `Key ${e.key} pressed down`;
  stateDiv.textContent = `key is down`
}
const handleUp = (e) =>{
  logDiv.textContent = `Key ${e.key} pressed up`;
  stateDiv.textContent = `key is up`
}