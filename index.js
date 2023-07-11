// window.addEventListener('keydown', playSound);
// window.addEventListener('touchstart', playSound);
// window.addEventListener('mouseover', playSound);

// function playSound(e) {
//   let keyCode;
//   if (e.type === 'keydown') {
//     keyCode = e.keyCode;
//   } else if (e.type === 'touchstart') {
//     const touch = e.touches[0];
//     const keyElement = document.elementFromPoint(touch.clientX, touch.clientY);
//     keyCode = keyElement.getAttribute('data-keys');
//   } else if (e.type === 'mouseover') {
//     keyCode = e.target.getAttribute('data-keys');
//   }

//   const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
//   const key = document.querySelector(`.key[data-keys="${keyCode}"]`);
//   if (!audio) return;
//   audio.currentTime = 0;
//   audio.play();
//   key.classList.add('playing');
// }

// function removeTransition(e) {
//   if (e.propertyName !== 'box-shadow') return;
//   this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('click', playSound);
window.addEventListener('touchstart', playSound);
window.addEventListener('mouseover', playSound);

function playSound(e) {
  let keyCode;
  if (e.type === 'keydown') {
    keyCode = e.keyCode;
  } else if (e.type === 'click') {
    const keyElement = e.target.closest('.key');
    if (!keyElement) return;
    keyCode = keyElement.getAttribute('data-keys');
  } else if (e.type === 'touchstart') {
    const touch = e.touches[0];
    const keyElement = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!keyElement) return;
    keyCode = keyElement.getAttribute('data-keys');
  } else if (e.type === 'mouseover') {
    keyCode = e.target.getAttribute('data-keys');
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-keys="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'box-shadow') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
