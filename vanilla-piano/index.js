window.addEventListener('keypress', function(e) {
  console.log(e.keyCode);
  let tone = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let pianoKey = document.querySelector(`polygon[data-key="${e.keyCode}"]`);
  if (!tone) {
    return;
  }

  tone.currentTime = 0;
  pianoKey.classList.add('pressed');
  tone.play();

  this.setTimeout(function() {
    pianoKey.classList.remove('pressed');
  }, 300);
});
