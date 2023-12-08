let blinkFreq=300
let blinkColor = "#ffffff"
let timerID

function saveColor(){
  let colorDlg = document.getElementById('colorDialog')
  let color = document.getElementById('colorSelector').value
  blinkColor = color
  document.body.style.backgroundColor = color
  console.log("color:"+blinkColor)
  colorDlg.close()
}

function saveBlink(){
  let blinkDlg = document.getElementById('blinkDialog')
  let blink = document.getElementById('blinkSlider').value
  blinkFreq = blink
  console.log("freq:"+blinkFreq)
  blinkDlg.close()
}

function closeAbout(){
  let aboutDlg = document.getElementById('aboutDialog')
  aboutDlg.close()
}

function doBlink(){
  document.body.style.backgroundColor = "#000000"

  setTimeout( function(){
    document.body.style.backgroundColor = blinkColor
  }, blinkFreq)
}
function blinkStart(){
  console.log("pushed")
  button = document.getElementById("btnStart")
  button.disabled = true
  doBlink() 
  timerID = setInterval(doBlink, blinkFreq)
}

function blinkStop(){
  clearInterval(timerID)
  button = document.getElementById("btnStart")
  button.disabled = false
}