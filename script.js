function saveColor(){
  let colorDlg = document.getElementById('colorDialog')
  let color = document.getElementById('colorSelector').value
  console.log(color)
  document.body.style.backgroundColor = color
  
  colorDlg.close()
}

function saveBlink(){
  let blinkDlg = document.getElementById('blinkDialog')
  let blink = document.getElementById('blinkSlider').value
  console.log(blink)
  
  blinkDlg.close()
}

function closeAbout(){
  let aboutDlg = document.getElementById('aboutDialog')
  aboutDlg.close()
}

function go_stop(){
  alert("OK")
}