let range = document.querySelector('input');
const backward = document.getElementById('backward');
const play = document.getElementById('play')
const forward = document.getElementById('forward');
const sounds = document.querySelector('audio');
const repeat = document.querySelector('#repeat')


play.addEventListener('click', () => {
  if (play.classList.toggle('fa-pause')) {
    sounds.play()
    play.classList.remove('fa-play')
    play.classList.add('fa-pause')
  }
  else {
    sounds.pause()
    play.classList.add('fa-play')
  }
  repeat.addEventListener('click', () => {
    sounds.play();
    sounds.currentTime = 0
  })
})

const inter = setInterval(e => {
  range.max = sounds.duration
  range.value = sounds.currentTime

}, 200)

range.addEventListener('change', (e) => {
  sounds.currentTime = e.target.value
  console.log(range.value)

})
forward.addEventListener('click', () => {
  sounds.currentTime++
})

backward.addEventListener('click', () => {
  sounds.currentTime--
})

